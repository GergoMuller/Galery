package services;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.List;
import java.util.Properties;

import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.inject.Inject;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import entity.Account;
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
    
    public String login(Account acc){
    	
    	String result = "Successful login";
		try (FileInputStream in = new FileInputStream("C:/Gergo/Projects/Galery-Backend/accounts.properties")){
			Properties accs = new Properties();
			accs.load(in);
			String usr = accs.getProperty("user","HIBA");
			String pw = accs.getProperty("password","HIBA");
			if(!acc.getPassword().equals(pw) || !acc.getUser().equals(usr)){
				result = "Inavlid login-name or pasword";
				System.out.println("invalid login");
			}
		} catch (FileNotFoundException e) {
			result = "Failed to locate accounts container";
			e.printStackTrace();
		} catch (IOException e) {
			result = "Failed to load accounts container";
			e.printStackTrace();
		}
		return result;
    }
    
}
