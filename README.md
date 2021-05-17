# springboot-react-mysql-crud

The Application will perform the CRUD operations using Springboot, React and MySQL/MariaDB

Pre-requisites:
  1. Maven
  2. React
  3. MySql/MariaDB

To run the application:

  1. Navigate to application.properties ``` cd crud/src/main/resources/ ```
  2. Edit the following in application.properties with your mysql config:
    <br /> 
    1. spring.datasource.url\
    2. spring.datasource.username\
    3. spring.datasource.password
    
  3. Come back to root folder where pom.xml is located and start the project with the command 
    ```mvn spring-boot:run```
  4. At this point springboot should be running successfully
  5. Naviage to the React folder ```cd ../Front-End/react-hooks-crud/```
  6. Install required dependencies with ```npm i```
  7. Start the react application ```npm start```
