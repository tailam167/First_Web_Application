package com.onlineshop.technology.models;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "product")
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class Product implements Serializable {

	@Id
	@Column(name = "product_id", nullable = false, updatable = false)
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@JsonFormat(shape = JsonFormat.Shape.NUMBER_INT)
	private Integer productId;

	@Column(name = "product_name")
	@JsonFormat(shape = JsonFormat.Shape.STRING)
	private String productName;

	@Column(name = "product_code")
	@JsonFormat(shape = JsonFormat.Shape.STRING)
	private String productCode;

	@Column(name = "release_date")
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
	private Date releaseDate;

	@Column(name = "description")
	@JsonFormat(shape = JsonFormat.Shape.STRING)
	private String description;

	@Column(name = "price")
	@JsonFormat(shape = JsonFormat.Shape.NUMBER_FLOAT)
	private Float price;

	@Column(name = "star_rating")
	@JsonFormat(shape = JsonFormat.Shape.NUMBER_FLOAT)
	private Float starRating;

	@Column(name = "image_url")
	@JsonFormat(shape = JsonFormat.Shape.STRING)
	private String imageUrl;

	public Product(Integer productId, String productName, String productCode, Date releaseDate, String description, Float price, Float starRating, String imageUrl, String productType, Integer quantity) {
		this.productId = productId;
		this.productName = productName;
		this.productCode = productCode;
		this.releaseDate = releaseDate;
		this.description = description;
		this.price = price;
		this.starRating = starRating;
		this.imageUrl = imageUrl;
	}

	public Product() {

	}
}
