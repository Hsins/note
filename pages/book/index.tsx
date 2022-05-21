import React, { useState, useMemo, useEffect } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';

import { BOOKS, type Book } from '@site/src/data/books';

import styles from './styles.module.css';

const TITLE = 'Docusaurus Site Showcase';
const DESCRIPTION = 'List of websites people are building with Docusaurus';

export default function Showcase(): JSX.Element {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <section className="margin-top--lg margin-bottom--lg text--center">
        <h1>讀書筆記</h1>
      </section>
      <div>
        <ul>
          {BOOKS.map((book) => (
            <div>
              <li>{book.title}</li>
              <li>{book.author}</li>
            </div>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
