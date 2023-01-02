FROM openjdk:11
VOLUME [ "/tmp" ]
EXPOSE 8080
ADD ./target/movieflix-0.0.1-SNAPSHOT.jar movieflix-0.0.1-SNAPSHOT.jar
ENTRYPOINT [ "java", "-jar", "movieflix-0.0.1-SNAPSHOT.jar" ]