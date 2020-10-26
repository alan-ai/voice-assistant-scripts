// {Name: Calendar}
// {Description: What day is tomorrow}

title("General calendar")

intent("what (date|day) $(V is|was|will be|would be|) $(DATE) $(T next year|last year|)",
    p => {
        if (p.T.value === "last year"){
            p.DATE = p.DATE.moment.add(-1, 'Y');
        }
        else if (p.T.value === "next year"){
            p.DATE = p.DATE.moment.add(1, 'Y');
        }
        let res = p.DATE.moment.format("dddd, MMMM Do YYYY");
        p.play(`${p.DATE} ${p.V} ` + res)
    })

follow("(and|) (what|) (about|) $(DATE)",
    p => {
        let res = p.DATE.moment.format("dddd, MMMM Do YYYY");
        p.play(`${p.DATE} ` + res)
    })

intent("(what is|) is (my|) timezone",
    p => {
        p.play("Your current timezone is " + p.timeZone);
    })

intent("(what is|) (the|) (current|) time (now|)",
    p => {
        p.play("Now is " + api.moment().tz(p.timeZone).format("h:mmA"));
    })

intent("(what is|) (the|) (current|) (day|date) (now|today|)",
    p => {
        p.play("Now is " + api.moment().tz(p.timeZone).format("dddd, MMMM Do YYYY"));
    })

intent("(what is|) (the|) (current|) day and time (now|today|)",
    p => {
        p.play("Now is " + api.moment().tz(p.timeZone).format("dddd, h:mmA"));
    })


title("Alan calendar")

intent("when (Alan|) Turing was born",
    p => {
        let turingBirthdate = api.moment("19120612", "YYYYMMDD");
        p.play(`Alan Turing was born
			${turingBirthdate.fromNow()}
			on ${turingBirthdate.format("dddd, MMMM Do YYYY")}`)
    })


title("Moon landing calendar")

intent("when was the first (unmanned|) (moon landing|lunar landing)",
    p => {
        let moonLandingDateLuna = api.moment("19590913", "YYYYMMDD");
        p.play(`The first unmanned moon landing was on
			${moonLandingDateLuna.format("dddd, MMMM Do YYYY")},
			${moonLandingDateLuna.fromNow()}`)
    })

var mannedLanding = p => {
    let moonLandingDateApollo = api.moment("19690720", "YYYYMMDD");
    p.play(`The first manned moon landing was on
		${moonLandingDateApollo.format("dddd, MMMM Do YYYY")},
		${moonLandingDateApollo.fromNow()}`)
}

follow("and manned", mannedLanding)

intent("when was the first manned (moon landing|lunar landing)", mannedLanding)

// see https://momentjs.com, moment js library is available through api.moment