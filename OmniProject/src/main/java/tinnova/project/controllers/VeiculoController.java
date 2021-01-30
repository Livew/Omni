package tinnova.project.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
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

import javassist.tools.web.BadHttpRequest;

@RestController
public class VeiculoController {

    @Autowired
    private VeiculoRepository repository;

    @GetMapping
    @RequestMapping(path = "/views/veiculos")
    public String findAll(Model model) {
    	Iterable<Veiculo> veiculos = repository.findAll();
        model.addAttribute("veiculos", veiculos);
        return "veiculos";
    }

    @GetMapping(path = "/{veiculo}")
    public Veiculo find(@PathVariable("veiculo") int veiculo) {
        return repository.findOne(veiculo);
    }

    @PostMapping(consumes = "application/json")
    public Veiculo create(@RequestBody Veiculo veiculo) {
        return repository.save(veiculo);
    }

    @DeleteMapping(path = "/{veiculo}")
    public void delete(@PathVariable("veiculo") int veiculo) {
        repository.delete(veiculo);
    }

    @PutMapping(path = "/{veiculo}")
    public Veiculo update(@PathVariable("veiculo") int marca, @RequestBody Veiculo veiculo) throws BadHttpRequest {
        if (repository.exists(marca)) {
            veiculo.setVeiculo(marca);
            return repository.save(veiculo);
        } else {
            throw new BadHttpRequest();
        }
    }

}