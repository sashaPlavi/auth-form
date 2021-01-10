import React, { Component } from 'react';
import { PostItems } from './PostItems';
import './Posts.css';
export default class Posts extends Component {
  render() {
    return (
      <div className="post-container">
        <ul className="posts">
          {PostItems.map((item, index) => {
            return (
              <li className="posts-item" key={index}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                posted by <small>{item.userId}</small>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
