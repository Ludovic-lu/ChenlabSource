import React, { useEffect, useRef } from 'react';
import { latestNews } from '../News/newsData';
import { Carousel } from 'antd';
import '../../../mock/homeApi';
import styles from './index.less';
import { connect } from 'react-redux';
import banner0 from '../../asset/home/0.jpg';
import banner1 from '../../asset/home/1.jpg';
import banner2 from '../../asset/home/2.jpg';
import banner3 from '../../asset/home/3.jpg';
import banner4 from '../../asset/home/4.jpg';
import { Link } from 'react-router-dom';

function Home() {
  const newsRef = useRef<HTMLDivElement>(null);
  const resumeAt = useRef(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    // Use the native scroll position so the scrollbar and automatic movement agree.
    const timer = window.setInterval(() => {
      const panel = newsRef.current;
      if (
        !panel ||
        document.hidden ||
        reducedMotion.matches ||
        panel.matches(':hover, :focus-within') ||
        Date.now() < resumeAt.current
      )
        return;

      const bottom = panel.scrollHeight - panel.clientHeight;
      if (bottom <= 0) return;
      if (panel.scrollTop >= bottom - 1) {
        panel.scrollTop = 0;
        resumeAt.current = Date.now() + 2000;
      } else {
        panel.scrollTop += 1;
      }
    }, 50);
    return () => window.clearInterval(timer);
  }, []);

  const pauseNews = () => {
    resumeAt.current = Date.now() + 3000;
  };

  return (
    <div className={styles.homeWrap}>
      <div className={styles.top}>
        <div className={styles.left}>
          <Carousel autoplay className={styles.images}>
            <img alt="" src={banner0} />
            <img alt="" src={banner1} />
            <img alt="" src={banner2} />
            <img alt="" src={banner3} />
            <img alt="组会合照" src={banner4} />
          </Carousel>
        </div>
        <div className={styles.right}>
          <div className={styles.title}>
            <h2>新闻动态</h2>
            <span className={styles.more}>
              <Link to="/xwdt">MORE&gt;&gt;</Link>
            </span>
          </div>
          <div
            ref={newsRef}
            className={styles.newWapper}
            role="region"
            aria-label="新闻动态，可滚动浏览；悬停或聚焦时暂停自动滚动"
            tabIndex={0}
            onWheel={pauseNews}
            onPointerDown={pauseNews}
            onTouchMove={pauseNews}
          >
            <div className={styles.news}>
              <div className={styles.loop}>
                <div className="bd02">
                  <div className="tempWrap">
                    <ul className="fhqdxx">
                      {latestNews.map((item) => {
                        return (
                          <li key={item.id}>
                            <Link
                              to={{
                                pathname: '/xwdt',
                                search: '?news=' + item.id,
                              }}
                            >
                              <h2>{item.title}</h2>
                              <p>{item.summary || item.desc}</p>
                              <span>发布时间：{item.time}</span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.clear}></div>
      <div className={styles.bottom}>
        <div className={styles.descWapper}>
          <h2>陈飞课题组——Chen Lab</h2>
          <p>
            陈飞于2020年9月加入湖南大学外国语学院，现任湖南大学外国语学院英语系教授，博士生导师、博士后合作导师。香港理工大学中文及双语学系博士；美国明尼苏达大学言语-语言-听力科学系访问学者。
          </p>
          <p>
            主要研究方向：心理语言学、神经语言学、病理语言学、一语及二语习得。其领域涉及心理声学、语言科学、大脑和认知科学。欢迎对相关领域感兴趣的本科生、硕士生、博士生和博士后加入Chen
            Lab。
          </p>
          <span>
            <Link to="/yjfx">+ 查看更多</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ common }: any) => ({ common });
export default connect(mapStateToProps)(Home);
