package myproject.data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Lead {
	  @Id
	  @GeneratedValue(strategy=GenerationType.IDENTITY)
	  private Integer id;
	  @Column
	  private String name;
	  @Column
	  private String company;
	  @Column
	  private String firstName;
	  @Column
	  private String lastName;

	  public Integer getId() {
	    return id;
	  }

	  public void setId(Integer id) {
	    this.id = id;
	  }


	  public String getName() {
	    return name;
	  }

	  public void setName(String name) {
	    this.name = name;
	  }

	public String getCompany() {
		return company;
	}

	public void setCompany(String company) {
		this.company = company;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

}
