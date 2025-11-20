package khj.backend.Service;

import khj.backend.domain.Post;

import java.util.List;

public interface PostService {
    List<Post> findAll();
    Post save(Post post);
    void delete(Long id);
    Post update(Long id, Post updated);
}
