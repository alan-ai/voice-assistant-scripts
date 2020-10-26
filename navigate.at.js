// {Name: Directions}
// {Description: Provides navigation and location information. "Take me to my next meeting", "Where is my meeting tomorrow morning?"}

title("Change address.")

intent("(change|update|set) $(L home|office|work) (address|location) to $(LOC)",
    reply("do you want to set $(L) address to $(LOC)",
        follow("(yes|ok|sure)", reply("ok, set")),
        follow("(no|nope|cancel)", reply("cancelled"))))

intent("(remember|set|update) (this|current|that) (location|address|) as $(L home|office|work) (address|)",
    p => {
        p.play("set")
    })


let where = context(()=> {
    title("Question where?")

    follow("(to my|to|my|) $(L home|office|work|gym)",
        async p => p.resolve(await getLocation(p, "your", p.L.value)))

    follow("$(NAME) ('s|) $(L home|office|work)",
        async p => p.resolve(await getLocation(p, p.NAME.value, p.L.value)))

    follow("(to|) $(C next|last|current) $(E meeting|event|appointment)",
        p => p.play(`navigating to ${p.C} ${p.E}`))

    follow("$(LOC)",
        p => p.resolve(p.LOC.value))

    follow('never mind', '(cancel|forget) (that|)',
        p => p.resolve(null))

    fallback(
        'Where should I navigate? It can be home, (office|work), work or a specific address',
        'I can navigate to home, office, (work|gym) or a specific address')
})

let whatAddress = context(() => {
    title("Question what address?")

    onCreateContext(p => {
        p.state = []
    })

    follow("$(NUMBER)",
        p => {
            p.state.push(p.NUMBER.number)
            checkAddress(p)
        })

    follow("(it's|the address is|) $(LOC)",
        p => {
            p.state.push(p.LOC.value)
            checkAddress(p)
        })

    follow('never mind', '(cancel|forget) (that|)',
        p => {
            p.resolve(null)
        })

    fallback('(Please|Just|) tell me the (address|location)',
             'I need the (location|address)')

    function checkAddress(p) {
        let a = parseAddress(p.state)
        if (a.valid) {
            p.resolve(a.address)
        } else {
            //p.onIdle(3000, function() {
              p.play("please tell me a valid address")
            //})
        }
    }
})

function parseAddress(items) {
    let addr = items.join(' ');
    if (addr.length > 5) {
        return {valid: true, address: addr};
    }
    return {valid: false};
}

function getLocation(p, person, loc) {
    let address = null;//''api.getAddress(person, loc)
    if (address) {
        return Promise.resolve(address);
    } else {
        p.play(`what is ${person} ${loc} address?`);
        return p.then(whatAddress);
    }
}


title("Navigation.")

intent("navigate (me|)", "build (me|) (a|) route (for me|)",
    reply("where (|to)?",
        async p => {
            let address = await p.then(where)
            if (address) {
                p.play("navigating to " + address)
            } else {
                p.play('(ok|fine|sure)')
            }
        }))

intent("(navigate me|build route|get me) (to|) $(LOC)",
    p => {
        p.play(`navigating to ${p.LOC}`)
    })

intent("(navigate|take me|get me|build route) (to|) (my|) $(L home|office|work|gym)",
       "(get|take) me (to|) (my|) $(L home)",
    async p => {
        let addr = await getLocation(p, "your", p.L.value)
        if (addr) {
            p.play(`navigating to ${p.L}, ${addr}`)
        } else {
            p.play('(ok|fine|sure)')
        }
    })


