import React from 'react';

import { useGlobalContext } from './context';

const Stories = () => {
  const { setLoading, hits, removeStory } = useGlobalContext();
  if (setLoading) {
    return <div className='loading'></div>;
  }
  return (
    <section className='stories'>
      {hits.map((story) => {
        const { created_at, objectID: id, title, url, author, points } = story;
        const date = created_at.slice(0, 10);
        return (
          <article key={id} className='story'>
            <h4 className='title'>{title}</h4>
            <p className='info'>
              {points} points by <span>{author} | </span>
              {date}
            </p>
            <div>
              <a href={url} className='read-link' target='_blank'>
                read more
              </a>
              <button className='remove-btn' onClick={() => removeStory(id)}>
                remove
              </button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Stories;
