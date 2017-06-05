package api;

import java.util.List;

import javax.ejb.EJB;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

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
		return Response.status(200).entity(result).build();
	}
	
	@GET
	public List<Painting> getAllPaintings(){
		return service.getAllPaintings();
	}
	

}
