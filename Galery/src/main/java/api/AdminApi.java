package api;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Properties;

import javax.ejb.EJB;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import entity.Account;
import services.PaintingService;

@Produces(MediaType.APPLICATION_JSON)
@Path("/admin")
public class AdminApi {
	
	@EJB
	private PaintingService service;
	
	@POST
	public Response login(Account acc){
		String res = service.login(acc);
		ObjectMapper mapper = new ObjectMapper();
		try {
			res = mapper.writeValueAsString(res);
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		return Response.status(200).entity(res).build();
	}

}
