package myproject.data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Tipo_envio__c")
public class TipoEnvio {
	  @Id
	  @GeneratedValue(strategy=GenerationType.IDENTITY)
	  private Integer id;

	  @Column
	  private String name;

	  @Column(name = "Duracion_viaje__c")
	  private double duracionViaje;

	  @Column(name = "Medio_transporte__c")
	  private String medioTransporte;

	  @Column(name = "coste_por_tonelada__c")
	  private double costeTonelada;

	  @Column(name = "seguro_incluido__c")
	  private boolean seguroIncluido;

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

	public double getDuracionViaje() {
		return duracionViaje;
	}

	public void setDuracionViaje(double duracionViaje) {
		this.duracionViaje = duracionViaje;
	}

	public String getMedioTransporte() {
		return medioTransporte;
	}

	public void setMedioTransporte(String medioTransporte) {
		this.medioTransporte = medioTransporte;
	}

	public double getCosteTonelada() {
		return costeTonelada;
	}

	public void setCosteTonelada(double costeTonelada) {
		this.costeTonelada = costeTonelada;
	}

	public boolean isSeguroIncluido() {
		return seguroIncluido;
	}

	public void setSeguroIncluido(boolean seguroIncluido) {
		this.seguroIncluido = seguroIncluido;
	}

}
