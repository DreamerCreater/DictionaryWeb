package com.bezkoder.springjwt.names;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

@Repository
public interface NamesRepository  extends JpaRepository<Names, Long>{
	
	@Query("From Names b where b.mhUg=:searchText OR b.meaning=:searchText ORDER BY b.id DESC")
 Page<Names> findAllNames(Pageable pageable, @Param("searchText") String searchText);
}
