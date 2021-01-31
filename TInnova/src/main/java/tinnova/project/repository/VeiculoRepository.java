package tinnova.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import tinnova.project.models.Veiculo;

@RepositoryRestResource(path = "/veiculos")
public interface VeiculoRepository extends JpaRepository<Veiculo, Integer> {

}
