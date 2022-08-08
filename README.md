# highway

[AIRport](https://beyond-decentralized.world/documentation.html#AIRport) 
extensions for the server environment.  More information can be found at
https://beyond-decentralized.world/documentation.html#Highway

[control](./control)
**being reworked** Decorators for document database support.

[driveway](./driveway)
**work in progress** API to integrate Repository based code with central
server based implementations

[flow](./flow)
**work in progress** Queueing mechanism support (underlying implementation
is yet to be identified, probably either ActiveMQ or RabbitMQ).

[scylladb](./scylladb)
**work in progress** Additional drivers and generation code to get Document database support
for predefined queries, theoretically with a single @Document() decorator

[vespa](./vespa)
**work in progress** Additional drivers and generation code to automatically get Full Text Search
support (with an additional entity definition) and eventually all additional
functionality that vespa provides.
