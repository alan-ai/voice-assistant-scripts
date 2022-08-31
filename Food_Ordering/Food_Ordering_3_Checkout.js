intent(
    "That's (all|it)",
    "(Ready to|) checkout",
    p => {
        if (_.isEmpty(p.visual.order) || !p.visual.total) {
            p.play("Your cart is empty, please make an order first.");
            return;
        }
        p.play({command: 'navigation', route: '/cart'});
        p.play("The total amount for your order is:");
        p.play({command: 'highlight', id: 'total'});
        p.play(`${p.visual.total} dollars`);
        playDelivery(p, p.visual.address, p.visual.date, p.visual.time);
        p.then(checkout);
    }
);

intent("Finish (order|)", p => {
    if (_.isEmpty(p.visual.order)) {
        p.play("Please, add something to your order first");
    } else {
        p.play({command: 'finishOrder'});
    }
});

let playDelivery = function (p, address, date, time) {
    if (!address) {
        p.play("What is the delivery address?");
    } else if (!time) {
        p.play({command: 'highlight', id: 'time'});
        p.play(
            "What is the delivery time?",
            "When should we deliver?"
        );
    } else if (!date) {
        p.play({command: 'highlight', id: 'date'});
        p.play(
            "What is the delivery date?",
            "And the date?"
        );
    } else {
        p.play({command: 'navigation', route: '/cart'});
        p.play(`OK, your order will be delivered to ${address}. Do you want to confirm your order?`);
        p.then(confirm, {address, date, time});
        return false;
    }
    return true;
}

// request delivery time
let checkout = context(() => {
    intent("$(LOC)", p => {
        p.play({command: 'address', address: p.LOC.value});
        p.play({command: 'highlight', id: 'address'});

        let date = api.moment().tz(p.timeZone).format("MMMM Do");
        let time = api.moment().tz(p.timeZone).add(30, 'minutes').format("h:mm a");
        p.play({command: "time", time: time, date: date});
        playDelivery(p, p.LOC.value, date, time);
    });

    intent(
        "$(TIME)",
        "$(T now|asap|right now|as soon as possible)",
        "$(DATE)",
        "$(TIME) $(DATE)",
        "$(DATE) $(TIME)",
        p => {
            let time, date;
            if (p.T) {
                // deliver in 30 minutes
                date = api.moment().tz(p.timeZone).format("MMMM Do");
                time = api.moment().tz(p.timeZone).add(30, 'minutes').format("h:mm a");
                p.play({command: 'highlight', id: 'date'});
            }
            if (p.TIME) {
                time = p.TIME.value;
                date = date ? date : p.visual.date;
                p.play({command: 'highlight', id: 'time'});
            }
            if (p.DATE) {
                date = p.DATE.moment.format("MMMM Do");
                time = time ? time : p.visual.time;
                p.play({command: 'highlight', id: 'date'});
            }
            p.play({command: 'time', time: time, date: date});

            playDelivery(p, p.visual.address, date, time);
        }
    );

    intent("Back (to the order|to the cart|)", p => {
        p.play({command: 'navigation', route: '/cart'});
        p.play("OK");
        p.resolve(null)
    });
});

let date = context(() => {
    intent(
        "$(TIME)",
        "$(T now|asap|right now|as soon as possible)",
        "$(DATE)",
        "$(TIME) $(DATE)",
        "$(DATE) $(TIME)",
        p => {
            let time, date;
            if (p.T) {
                // deliver in 30 minutes
                date = api.moment().tz(p.timeZone).format("MMMM Do");
                time = api.moment().tz(p.timeZone).add(30, 'minutes').format("h:mm a");
                p.play({command: 'highlight', id: 'date'});
            }
            if (p.TIME) {
                time = p.TIME.value;
                date = date ? date : p.visual.date;
                p.play({command: 'highlight', id: 'time'});
            }
            if (p.DATE) {
                date = p.DATE.moment.format("MMMM Do");
                time = time ? time : p.visual.time;
                p.play({command: 'highlight', id: 'date'});
            }
            p.play({command: 'time', time: time, date: date});

            playDelivery(p, p.visual.address, date, time);
        }
    );
});

let confirm = context(() => {
    intent("(Yes|ok|correct|procede|confirm|continue|next|sure|I do|go on) (please|sir|)", p => {
        p.play("(Great,|) your order has been confirmed. And will be delivered");
        if (p.visual.address) {
            p.play({command: 'highlight', id: 'address'});
            p.play(` to ${p.visual.address}`);
        }
        if (p.visual.date) {
            p.play({command: 'highlight', id: 'date'});
            p.play(` on ${p.visual.date}`);
        }
        if (p.visual.address) {
            p.play({command: 'highlight', id: 'time'});
            p.play(` at ${p.visual.time}`);
        }
        p.play({command: 'finishOrder'});
        p.resolve(null);
    });

    intent(
        "(No|nope|stop|back|go back|return)",
        "(It is|) (not valid|invalid|not correct)",
        "(I|) (need to|should|can you|can I|please|) (fix|change|update|edit|alter) (my|the|) (delivery|) (address|time|date|details|order)",
        p => {
            p.play({command: 'navigation', route: '/cart'});
            p.play("OK, please review and (set|change|edit|update|alter) your (delivery|) details.");
            p.resolve(null);
        }
    );

    fallback("(Sorry,|) I didn't get it. Do you want to confirm your order?");
});

// set address
intent(
    "(Let's|) (set|change|replace|update|alter) (the|) (delivery|) address",
    "(The|) (delivery|) address is (not correct|invalid|wrong)",
    p => {
        if (_.isEmpty(p.visual.order)) {
            p.play("Please, add something to your order first.");
        } else {
            p.play({command: 'highlight', id: 'address'});
            p.play("What is the delivery address?");
            p.then(checkout);
        }
    }
);

const COMPOUND_DELIVERY_INTENT = [
    "Deliver to $(LOC)",
    "Delivery address (is|) $(LOC)",
    "Deliver to $(LOC) (at|on|) $(DATE)",
    "Deliver to $(LOC) (at|on|) $(DATE) (at|on|) $(TIME)",
    "Deliver (at|on|) $(DATE)",
    "Delivery date (is|) $(DATE)",
    "Deliver (at|on|) $(TIME)",
    "Delivery time (is|) $(TIME)",
    "Deliver (at|on|) $(DATE) (at|on|) $(TIME)"
]

intent(COMPOUND_DELIVERY_INTENT, p => {
    if (_.isEmpty(p.visual.order) || !p.visual.total) {
        p.play("Your cart is empty, please make an order first.");
        return;
    }
    let address = p.visual.address;
    let date = p.visual.date;
    let time = p.visual.time;

    p.play({command: 'checkout'});

    if (p.LOC) {
        p.play({command: 'address', address: p.LOC.value});
        address = p.LOC.value;
    }
    if (p.DATE || p.TIME) {
        date = p.DATE ? p.DATE.moment.format("MMMM Do") : null;
        time = p.TIME ? p.TIME.value : null;
        p.play({command: 'time', time: time, date: date});
    }
    if (playDelivery(p, address, date, time)) {
        p.then(checkout);
    }
});

// set date/time
intent(
    "(Let's|) (set|change|replace|update|alter) (the|) (delivery|) (time|date)",
    "(The|) (delivery|) (date|time) is (not correct|invalid|wrong)",
    p => {
        if (_.isEmpty(p.visual.order)) {
            p.play("Please, add something to your order first.");
        } else {
            p.play({command: 'highlight', id: 'time'});
            p.play("What is the delivery time?");
            p.then(date);
        }
    }
);

intent(
    "Make the address $(LOC)",
    "Set address to $(LOC)",
    "Address (is|) $(LOC)",
    p => {
        p.play({command: 'address', address: p.LOC.value});
        p.play({command: 'highlight', id: 'address'});
        p.play(
            `The delivery address is ${p.LOC}`,
            `We will deliver your order to ${p.LOC}`
        );
    }
);