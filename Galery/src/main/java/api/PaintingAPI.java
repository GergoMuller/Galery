package api;

import java.util.List;

import javax.ejb.EJB;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.fasterxml.jackson.databind.ObjectMapper;

import entity.Painting;
import services.PaintingService;

@Produces(MediaType.APPLICATION_JSON)
@Path("/paintings")
public class PaintingAPI {
	
	@EJB
	private PaintingService service;
	
	@POST
	public Response addPainting(Painting p){
		String result = service.addPainting(p);
		ObjectMapper mapper = new ObjectMapper();
		try{
			result = mapper.writeValueAsString(result);
		}catch(Exception e){
			System.out.println("Parse ERROR");
		}
		return Response.status(200).entity(result).build();
	}
	
	@GET
	public List<Painting> getAllPaintings(){
		return service.getAllPaintings();
	}
	

}
