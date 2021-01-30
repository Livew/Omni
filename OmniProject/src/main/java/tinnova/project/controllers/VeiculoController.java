package tinnova.project.controllers;

import java.util.HashMap;

import org.springframework.http.ResponseEntity;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import tinnova.project.models.Veiculo;
import tinnova.project.repository.VeiculoRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class VeiculoController {
    @Autowired
    private VeiculoRepository veiculoRepository;

    @GetMapping("/veiculos")
    public List<Veiculo> getAllEmployees() {
        return veiculoRepository.findAll();
    }

    @GetMapping("/veiculos/{id}")
    public ResponseEntity<Veiculo> getEmployeeById(@PathVariable(value = "id") int veiculoId)
        throws Exception {
    	Veiculo veiculo = veiculoRepository.findOne(veiculoId);
        return ResponseEntity.ok().body(veiculo);
    }
    
    @PostMapping("/veiculos")
    public Veiculo createEmployee(@Valid @RequestBody Veiculo veiculo) {
        return veiculoRepository.save(veiculo);
    }

    @PutMapping("/veiculos/{id}")
    public ResponseEntity<Veiculo> updateVeiculo(@PathVariable(value = "id") int veiculoId,
         @Valid @RequestBody Veiculo veiculoDetalhes) throws Exception {
    	Veiculo veiculo = veiculoRepository.findOne(veiculoId);


    	veiculo.setMarca(veiculoDetalhes.getMarca());
        final Veiculo updateVeiculo = veiculoRepository.save(veiculo);
        return ResponseEntity.ok(updateVeiculo);
    }

    @DeleteMapping("/veiculos/{id}")
    public Map<String, Boolean> deleteEmployee(@PathVariable(value = "id") int veiculoId)
         throws Exception {
    	Veiculo veiculo = veiculoRepository.findOne(veiculoId);

        veiculoRepository.delete(veiculo);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }


}