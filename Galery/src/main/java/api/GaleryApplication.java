package api;

import java.util.HashSet;
import java.util.Set;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;

import org.jboss.resteasy.plugins.interceptors.CorsFilter;

@ApplicationPath("/galery")
public class GaleryApplication extends Application{
	
	private Set<Object> singletons = new HashSet<Object>();
	private Set<Class<?>> classes = new HashSet<>();

	public GaleryApplication() {
		CorsFilter corsFilter = new CorsFilter();
		corsFilter.getAllowedOrigins().add("*");
		corsFilter.getAllowedOrigins().add("http://localhost:2121/*");
        corsFilter.setAllowedMethods("OPTIONS, GET, POST, DELETE, PUT, PATCH");
        singletons.add(corsFilter);
        
        classes.add(PaintingAPI.class);
        classes.add(AdminApi.class);
	}
	
	@Override
	public Set<Class<?>> getClasses() {
			return classes;
	}

	@Override
	public Set<Object> getSingletons() {
		
		return singletons;
	}
	
}
