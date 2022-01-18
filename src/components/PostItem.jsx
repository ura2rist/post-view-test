import React from 'react';
import MyButton from './UI/button/MyButton';
import { useNavigate } from 'react-router-dom';

function PostItem( props ) {
  const router = useNavigate();

  return (
    <div className='post'>
      <div className='post_content'>
        <strong>{ props.post.id }</strong>
        <strong>{ props.number }. { props.post.title }</strong>
        <div>
          { props.post.body }
        </div>
        <div className='post_btns'>
          <MyButton onClick={ () => router(`/posts/${ props.post.id }`) }>Открыть</MyButton>
          <MyButton onClick={ () => props.remove(props.post) }>Удалить</MyButton>
        </div>
      </div>
    </div>
  );
}

export default PostItem;