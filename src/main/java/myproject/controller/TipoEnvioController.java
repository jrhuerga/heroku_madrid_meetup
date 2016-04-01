package myproject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import myproject.data.Lead;
import myproject.data.LeadRepository;
import myproject.data.TipoEnvio;
import myproject.data.TipoEnvioRepository;

@RestController
@RequestMapping("/tipoenvio")
public class TipoEnvioController {
	  @Autowired
	  private TipoEnvioRepository repo;
	  
	  @RequestMapping(method = RequestMethod.GET)
	  public List<TipoEnvio> findTipoEnvio() {
	    return repo.findAll();
	  }
	  
	  @RequestMapping(method = RequestMethod.POST)
	  public TipoEnvio addTipoEnvio(@RequestBody TipoEnvio tipoEnvio) {
	    tipoEnvio.setId(null);
	    return repo.saveAndFlush(tipoEnvio);
	  }
	  
	  @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	  public TipoEnvio updateTipoEnvio(@RequestBody TipoEnvio updatedTipoEnvio, @PathVariable Integer id) {
	    updatedTipoEnvio.setId(id);
	    return repo.saveAndFlush(updatedTipoEnvio);
	  }
	  
	  @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	  public void deleteTipoEnvio(@PathVariable Integer id) {
	    repo.delete(id);
	  }


}
