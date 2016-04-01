package myproject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import myproject.data.Item;
import myproject.data.ItemRepository;
import myproject.data.Lead;
import myproject.data.LeadRepository;

@RestController
@RequestMapping("/leads")
public class LeadController {
	  @Autowired
	  private LeadRepository repo;
	  
	  @RequestMapping(method = RequestMethod.GET)
	  public List<Lead> findItems() {
	    return repo.findAll();
	  }
	  
	  @RequestMapping(method = RequestMethod.POST)
	  public Lead addLead(@RequestBody Lead lead) {
	    lead.setId(null);
	    return repo.saveAndFlush(lead);
	  }
	  
	  @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	  public Lead updateLead(@RequestBody Lead updatedLead, @PathVariable Integer id) {
	    updatedLead.setId(id);
	    return repo.saveAndFlush(updatedLead);
	  }
	  
	  @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	  public void deleteLead(@PathVariable Integer id) {
	    repo.delete(id);
	  }

}
