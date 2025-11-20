package khj.backend.controller;


import khj.backend.Service.PostService;
import khj.backend.domain.Post;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/posts")
@CrossOrigin(origins = "http://localhost:5173")
public class PostController {
    private final PostService service;

    @GetMapping
    public List<Post> getAll() {
        return service.findAll();
    }

    @PostMapping
    public Post addPost(@RequestBody Post post) {
        return service.save(post);
    }

    @PutMapping("/{id}")
    public Post updatePost(@PathVariable Long id, @RequestBody Post post) {
        return service.update(id, post);
    }

    @DeleteMapping("/{id}")
    public void deletePost(@PathVariable Long id) {
        service.delete(id);
    }
}
