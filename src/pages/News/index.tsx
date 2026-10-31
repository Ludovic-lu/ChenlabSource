import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { newsItems } from './newsData';
import styles from './index.less';
import { connect } from 'react-redux';

function News() {
  const { search } = useLocation();
  useEffect(() => {
    const id = new URLSearchParams(search).get('news');
    if (id) document.getElementById(id)?.scrollIntoView({ block: 'start' });
  }, [search]);

  return (
    <div className={styles.newsWrap}>
      <div className={styles.mainTitle}>新闻动态</div>
      <div className={styles.list}>
        {newsItems.map((item) => {
          return (
            <div id={item.id} key={item.id} className={styles.partWapper}>
              <div className="news_dl">
                <dt>
                  <span className={styles.title}>{item.title}</span>
                  <span className={styles.time}>[{item.time}]</span>
                </dt>
                <div className={styles.desc}>{item.desc}</div>
                {item.link && (
                  <a
                    className={styles.sourceLink}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    查看相关链接
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const mapStateToProps = ({ common }: any) => ({ common });
export default connect(mapStateToProps)(News);
