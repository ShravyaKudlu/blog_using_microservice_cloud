Part2:



Problems: With Stage1:

For Every Post we need seperate call to comments, 
In my case I had 6 post and I ended up repeatedly making 6 request to comment section.

![Alt duplicateComment](img/Dupliicates.png)


Sol1: Sync Solution 
![Alt SyncDiag](img/SyncSolution.png)
Downsides -> The entire application depends on 1 service, these services are not mutually exclusive.

Sol2: Addition of EventBus to create a query Service.
Everytime there is an occurance of an event(PostCreate || CommentCreate) it would be shared with the eventBus which would update the query Service.
Hence, the query Service would be super fast.
1 downside is if the eventbus crashes the query service will crash.
![Alt EventBus](img/eventBus.jpg) 


Different Types of event bus: RabbitMQ, Kafka, NAT which has a lot of functionality with express


Trying to build my own event Bus
Sol:
After Adding Event Bus
![Alt EventBus in realLife](img/CondensedQuery.png)


QueryAPI
![Alt Query API working](img/QueryService.png)


After adding the changes to React
