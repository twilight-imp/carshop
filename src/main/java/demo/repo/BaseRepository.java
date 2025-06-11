package demo.repo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;

import java.util.List;

public abstract class BaseRepository<T> {

    @Autowired
    private MongoTemplate mongoTemplate;

    private final Class<T> entityClass;

    protected BaseRepository(Class<T> entityClass) {
        this.entityClass = entityClass;
    }

    public List<T> findAll() {return mongoTemplate.findAll(entityClass);}
}
