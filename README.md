This is a Application that I'll create using Microservice Architechure.

Monolithic Architecture is an architectural style for designing software applications where all components of the application are tightly integrated into a single codebase, and they run as a single process. This approach contrasts with a microservices architecture, where the application is broken down into smaller, loosely coupled services that run independently. Here's an explanation of the issues you mentioned in the context of monolithic architecture:

1. Interdependence of Services:
    In a monolithic architecture, all services are tightly integrated. This means that any changes or updates to one part of the application can potentially affect other parts. This interdependence can make it challenging to develop, test, and maintain the application. It may also lead to difficulties in scaling individual components independently.
![Alt InterDependency](img/InterDependency.png)

2.    Single Point of Failure:
    Since all services in a monolithic architecture are typically running in the same process or application, they share the same runtime environment. If one service experiences a failure or goes down, it can potentially impact the entire application. This makes the architecture vulnerable to single points of failure. For example, if a critical service crashes, it can bring down the entire application.
![Alt SinglePointFailure](img/SinglePointFailure.png)

3.     Database Dependency:
    In a monolithic architecture, it's common for all services to share the same database. This can lead to issues when different services have different data storage requirements. For example, one service might need a relational database, while another might require a NoSQL database. Changing the type or schema of the database can result in compatibility issues and unintended consequences for other services. It also makes it challenging to scale and optimize the database for different service needs.
![Alt DatabaseDependency](img/DatabaseDependency.png)

However, it's important to note that monolithic architectures still have their use cases and can be appropriate for simpler applications or when transitioning from legacy systems. The choice of architecture should be based on the specific needs and constraints of the project.

To address these issues, many organizations have moved towards more modular and decoupled architectures, such as microservices or serverless architectures. These architectures aim to break down the application into smaller, independent components that can be developed, deployed, and scaled individually. This can improve fault tolerance, scalability, and flexibility.

![Alt Microservice](img/Microservice.png)

Problem: Where we can see that some features need to make use of other feature to implement the changes.
To make these feasiable there are 2 ways.
![Alt text](img/Problems.png)

1. Synchronous Method:

    Features directly communicate with each other in real-time.
    Simplicity and real-time updates are advantages.
    Drawbacks include tight coupling, potential performance bottlenecks, and scalability challenges.


2. Asynchronous Method:

    Events or requests are sent to an event bus or message broker for asynchronous processing.
    Promotes loose coupling, scalability, and fault tolerance.
    Drawbacks include the need for extra storage and increased complexity.











Part 1:
![Alt Architecture Img](img/BasicArchitechture.png)

Library Used- React-js, NodeJs, Express, Axios, CORS

Results:
![Alt Result](img/FinalResult.png)
![Alt Comment](img/Comment.png)
![Alt Post](img/Posts.png)

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
![Alt text](img/eventBus.jpg) 