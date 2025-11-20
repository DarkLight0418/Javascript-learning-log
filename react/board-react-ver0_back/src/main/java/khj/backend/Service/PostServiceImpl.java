package khj.backend.Service;

import khj.backend.Repository.PostRepository;
import khj.backend.domain.Post;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class PostServiceImpl implements PostService {
    private final PostRepository postRepository;

    @Override
    public List<Post> findAll() {
        return postRepository.findAll();
    }

    @Override
    public Post save(Post post) {
        return postRepository.save(post);
    }

    @Override
    public void delete(Long id) {
        postRepository.deleteById(id);
    }

    @Override
    public Post update(Long id, Post updated) {
        return postRepository.findById(id)
                .map(p -> {
                    p.setTitle(updated.getTitle());
                    p.setContent(updated.getContent());
                    return postRepository.save(p);
                }).orElseThrow();
    }
}
