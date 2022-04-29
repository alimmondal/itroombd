import React from 'react';
import Typewriter from 'typewriter-effect';
import styles from '../styles/Testimonials.module.css';
import Circle from '../components/Circle';
import { users } from '../data';
import Image from 'next/image';

function Testimonials() {
  return (
    <div className={styles.testimonials} id="testimonial">
      <Circle backgroundColor="#FF428D" left="-60vh" top="-60vh" />
      <Circle backgroundColor="yellow" right="-60vh" bottom="-60vh" />
      <h1 className={styles.title} data-aos="zoom-in-up">
        <Typewriter
          options={{
            strings: ['Testimonial', 'What people say'],
            autoStart: true,
            loop: true,
            delay: 75,
          }}
        />
      </h1>
      <div className={styles.wrapper}>
        {users.map((user) => (
          <div key={user.id} className={styles.card} data-aos="flip-left">
            <Image
              src={`/img/${user.logo}`}
              width="30"
              height="30"
              alt={user.name}
            />
            <p className={styles.comment}>{user.comment}</p>
            <div className={styles.person}>
              <Image
                className={styles.avatar}
                src={`/img/${user.avatar}`}
                width="45"
                height="45"
                objectFit="cover"
                alt={user.name}
              />
              <div className={styles.info}>
                <span className={styles.username}>{user.name}</span>
                <span className={styles.jobTitle}>{user.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
