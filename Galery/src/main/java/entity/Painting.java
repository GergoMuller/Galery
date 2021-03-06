package entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;





@Entity
public class Painting implements Serializable {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	
	@Lob
	private byte[] painting;
	
	@Lob
	private byte[] imprint;
	
	private String title;
	
	private String dimensions;
	
	private String type;
	
	@JsonProperty("year")
	private String creationYear;
	
	private double price;
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public byte[] getPainting() {
		return painting;
	}

	public void setPainting(byte[] painting) {
		this.painting = painting;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDimensions() {
		return dimensions;
	}

	public void setDimensions(String dimensions) {
		this.dimensions = dimensions;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	@JsonProperty("year")
	public String getCreationYear() {
		return creationYear;
	}

	public void setCreationYear(String creationYear) {
		this.creationYear = creationYear;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public byte[] getImprint() {
		return imprint;
	}

	public void setImprint(byte[] imprint) {
		this.imprint = imprint;
	}
	
	

}
