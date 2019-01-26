# Four Ten: Rules

Four Ten is a point-accumulation, solitaire card game.

Rules created by [Jeremiah Sanders][], copyright &copy; 2019, released under [Attribution-NonCommercial-ShareAlike 4.0 Creative Commons license][].

## Supplies

- Thirty-two (`32`) `cards` (or similarly random-selection-capable tokens), eight (`8`) each of values `1`, `2`, `3`, and `4`.
- Three (`3`) tokens to represent `safeties`.

## Goal

The primary goal of Four Ten is to accumulate a target number of points, normally `50`. This is known as the `game target`. The secondary goal is to do so in as few rounds as possible.

## Glossary

- `Exchange`: Exchange one card in the `Hand` with one in the `Home` or `Shadow`.
- `Fault`: A potential failure, ending the game. Expending a `safety`, or expending accrued points equal to the `Hand`, `Home`, and `Shadow` values, will `prevent` the fault. If a fault is not prevented, the game ends as the fault `busts`.
- `Game target`: The target value which ends the game.
- `Hand target`: The target value which ends a round.
- `Hand` (generic): A collection of up to `4` cards.
- `Hand` (specific): The primary hand used in comparison with the `game target` to potentially [gain points][].
- `Home`: Assets. Hand whose total must always be greater than or equal to the `Hand` value, failure resulting in a `fault`.
- `Round`: The period beginning with an initial state, empty `Hand`, `Home`, and `Shadow`, and a full deck of cards, which ends with when the `Hand` value equals the `hand target`, all cards in the deck are drawn, or a `fault` occurs.
- `Safety`: A fault prevention mechanism. Safeties are expended to `prevent` faults.
- `Shadow`: Risk. Hand whose total must always be less than or equal to the `Hand` value, failure resulting in a `fault`.

## Play

Play proceeds in `rounds`. Play continues until the [goal][] is achieved, or a `fault` is not prevented and the player [busts][].

### Setup

The game begins with the player receiving three (`3`) `safeties`. These may be recorded as physical tokens, numbers on scratch paper, etc. Play then continues by beginning the first `round`.

### Rounds

Each `round` begins with all cards shuffled (or similarly randomized) into a single `deck`. Play proceeds through `turns`.

### Turns

Each `turn` consists of `drawing` one (`1`) card into the `Hand`, `Home`, or `Shadow`. Optionally, any number of `exchanges` may be performed after the card is drawn.

Turns are repeated until [gaining points][] or [busting][].

### Drawing cards

At the beginning of the turn, one (`1`) card is drawn. This card may be placed into any hand (the `Hand`, `Home`, or `Shadow`) which contains three (`3`) or fewer cards.

> On the first turn you must always draw a card into the `Home`. It's the only destination which would not result in an immediate [fault][].

If all three hands (the `Hand`, `Home`, and `Shadow`) have four (`4`) cards in them, a single card, from any hand, must be [replaced][].

### Exchanges

An `exchange` is the exchange (swap) of one card in the `Hand` with one in either the `Home` or `Shadow`. After [drawing][] or [replacing][] a card, any number of `exchanges` may be performed.

Each time an `exchange` occurs, the `Hand` is considered for [gaining points][], and each hand is considered for [faults][].

`Exchanges` may be continued until the player decides to end the turn.

### Replacements

When all three hands (the `Hand`, `Home`, and `Shadow`) have four (`4`) cards in them, a card may be `replaced`. A card is `replaced` by selecting a card for replacement (from the existing hands), then drawing a card to replace it. The previous card is then removed from play until the next `round`. The replacement is immediate. If the replacement results in [gaining points][] or a [fault][], that occurs immediately. If not, then cards may be [exchanged][] or the turn may be ended.

### Hands

A `hand`, generically, is a group of 0-4 cards. Each hand has a `value` equal to the sum value of its cards. **All** hands' values must remain less than or equal to the `hand target`. If any hand value exceeds the `hand target`, a `fault` occurs.

#### Hand

The `Hand`, specifically, is the hand which is compared against the `hand target`. It is the center of play. If the `Hand` value equals the `hand target` the round immediately ends and the player [gains points][].

#### Home

The `Home` is a hand which acts as a reserve for building the `Hand`. It must maintain a value greater than or equal to the `Hand` value **and** equal to or less than the `hand target`.

#### Shadow

The `Shadow` is a hand which acts a reserve for building the `Hand`. It must maintain a value less than or equal to the `Hand` value **and** equal to or less than the `hand target`.

### Gaining points

Points are accumulated by developing a `hand` equal to the `hand target` number, `10`, or by drawing down to the bottom of the draw pile.

If the target number is reached, the player receives points equal to the `hand target`. If the bottom of the draw pile is reached, the player receives points equal to the sum of their current `Hand` value, the `Home` value, and the `Shadow` value.

## Fault

A `fault` occurs if any hand (the `Hand`, `Home`, or `Shadow`) reaches a value **greater than** the `hand target`. Additionally, a `fault` occurs if the `Shadow` is ever **greater than** the `Hand`, or the `Home` is ever **less than** the `Hand`.

Faults must be `prevented`, by expending one (`1`) `safety`. If no safeties remain, a fault may be `prevented` expending previously-gained points equal to the sum of all hands (the `Hand`, `Home`, and `Shadow`). If total gained points are insufficient then they may not be expended and the fault [busts][].

When a fault is `prevented`, the `round` ends and no points are gained. Play continues with a new [round][].

## Safeties

`Safeties` are tokens which may be expended to `prevent` a `fault`.

## Busting

If a `fault` is not prevented, it `busts`. This ends the game.

[attribution-noncommercial-sharealike 4.0 creative commons license]: https://creativecommons.org/licenses/by-nc-sa/4.0/
[busting]: #Busting
[busts]: #Busting
[drawing]: #Drawing%20cards
[exchanged]: #Exchanges
[fault]: #Fault
[faults]: #Fault
[gain points]: #Gaining%20points
[gaining points]: #Gaining%20points
[gains points]: #Gaining%20points
[goal]: #Goal
[jeremiah sanders]: https://www.jeremiahsanders.com
[replaced]: #Replacements
[replacing]: #Replacements
[round]: #Rounds
