package services;

import java.util.List;

import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.inject.Inject;

import entity.Painting;
import repository.PaintingRepository;


@Stateless
@LocalBean
public class PaintingService {

    @Inject
    private PaintingRepository paintingRepo;
    
    public String addPainting(Painting p){
    	try{
    		paintingRepo.save(p);
    		return "SUCCESS";	
    	}catch(Exception e){
    		return "Failed to create Painting";
    	}
    }
    
    public List<Painting> getAllPaintings(){
    	return paintingRepo.findAll();
    }
    
}
