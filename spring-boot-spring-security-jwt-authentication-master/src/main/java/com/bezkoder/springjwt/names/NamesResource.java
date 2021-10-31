package com.bezkoder.springjwt.names;

import java.net.URI;
import java.util.Arrays;
import java.util.List;
import java.util.Set;
import java.util.TreeSet;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

//import com.thesis.dictionarywebservice.resource.Resource;



@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("management/api/v1/names")
public class NamesResource  {
	@Autowired
    private NamesRepository namesRepository;
	
	@GetMapping
	@PreAuthorize("hasAnyRole('ROLE_MODERATOR','ROLE_ADMIN')")
	public List<Names> getAllTodos(){
		return namesRepository.findAll();
		//return todoService.findAll();
	}
	@GetMapping("names/all")
	public List<Names> getAllNames(){
		return namesRepository.findAll();
		//return todoService.findAll();
	}
	@GetMapping("names/{id}")
	public Names getName(@PathVariable long id){
		return namesRepository.findById(id).get();
		//return todoService.findById(id);
	
	}	

	@DeleteMapping(path="{id}")
	@PreAuthorize("hasAuthority('student:write')")
	public ResponseEntity<Void> 
	deleteTodo( @PathVariable long id
			){
		
		namesRepository.deleteById(id);
		
			return ResponseEntity.noContent().build();
		
	}
	@PutMapping(path= "{id}")
	@PreAuthorize("hasAuthority('student:write')")
	
	public ResponseEntity<Names> updateName(
			@PathVariable long id,
			@RequestBody Names name){
		
		Names nameUpdated = namesRepository.save(name);
		return new ResponseEntity<Names>(name, HttpStatus.OK);
	}
	@PostMapping
	@PreAuthorize("hasAuthority('student:write')")
	public ResponseEntity<Void> createName(
			@RequestBody Names name){
		//Todo createdTodo = todoService.save(todo);
		Names createdNames = namesRepository.save(name);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").
		buildAndExpand(createdNames.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}
	@GetMapping("/isActive")
	public ResponseEntity<Set<Integer>> findAllLanguages(){
		return new ResponseEntity<>(new TreeSet<>(Arrays.asList(1,0)),HttpStatus.OK);
	}
	@GetMapping("/isMon")
	public ResponseEntity<Set<Integer>> findAllisMon(){
		return new ResponseEntity<>(new TreeSet<>(Arrays.asList(1,0)),HttpStatus.OK);
	}
	public Page<Names> findAllWord(Pageable pageable, String searchText){
		return namesRepository.findAllNames(pageable, searchText);
	}
	@GetMapping("/search/{searchText}")
	public ResponseEntity<Page<Names>> findAll(Pageable pageable, @PathVariable String searchText){
		return new ResponseEntity<>(findAllWord(pageable,searchText),HttpStatus.OK);

}
	
	
}

