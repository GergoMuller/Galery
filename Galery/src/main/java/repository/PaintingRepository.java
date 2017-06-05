package repository;

import javax.enterprise.context.Dependent;

import org.apache.deltaspike.data.api.EntityRepository;
import org.apache.deltaspike.data.api.Repository;

import entity.Painting;

@Repository
@Dependent
public interface PaintingRepository extends EntityRepository<Painting, Long>{

}
