import React, { useState, useEffect } from 'react';
import PreviewImage from '@components/PreviewImage';
import styles from './index.less';
import { connect } from 'react-redux';
import { Button, Empty } from 'antd';

interface IList {
  name: string;
  title: string;
  type: string;
  email: string;
  desc: string;
  hobby: string;
}

interface IOption {
  label: string;
  value: string;
}

const total = [
  // 同类成员按年级由低到高排列（入学年份由新到旧），同级按姓名拼音 A-Z 排列；未注明年级的置后。
  // 导师：保留原有顺序
  {
    name: '陈飞',
    title: '教授，博士生导师',
    type: '导师',
    email: 'chenfeianthony@gmail.com',
    desc: '现任湖南大学外国语学院英语系教授。主要研究方向：心理语言学、神经语言学、病理语言学、语言习得。已发表SCI/SSCI/EI检索的国际期刊和会议论文30余篇。其领域涉及心理声学、语言科学、大脑和认知科学。',
    hobby: null,
  },
  {
    name: '朱敏',
    title: '助理教授',
    type: '导师',
    email: 'minzhuwiki@gmail.com / minzhu@hnu.edu.cn',
    desc: '现任湖南大学外国语学院助理教授。本人从事病理语言学与实验语音学研究，聚焦言语感知产出及其在语言加工与习得过程中的心理与认知神经机制。',
    hobby: null,
  },

  // 博士后：暂无数据

  // 博士生
  {
    name: '阳扬',
    title: '博士生',
    type: '博士生',
    email: 'yangtingchangsha6699@gmail.com',
    desc: '2026级博士生，本科毕业于湖南师范大学、硕士毕业于华中科技大学',
    hobby: '舞蹈、悬疑小说、宫崎骏动漫',
  },
  {
    name: '毛宁',
    title: '博士生',
    type: '博士生',
    email: 'morningmaoa@sina.com',
    desc: '2025级博士生，本科毕业于湖南科技大学、硕士毕业于爱丁堡大学',
    hobby: '手工，唱歌',
  },
  {
    name: '姜雨辰',
    title: '博士生',
    type: '博士生',
    email: 'Kalenlululu@qq.com',
    desc: '2023级直博生，2019级本科，毕业于湖南大学后考取湖南大学直博生',
    hobby: '音乐、书法',
  },
  {
    name: '郑昕',
    title: '博士生',
    type: '博士生',
    email: 'CarolynCh@hnu.edu.cn',
    desc: '2024级博士，本科毕业于重庆大学、硕士毕业于天津外国语大学',
    hobby: '看书',
  },
  {
    name: '扶秀枝',
    title: '博士生',
    type: '博士生',
    email: 'amyfu@hnu.edu.cn',
    desc: '2023级博士生，本科毕业于吉首大学、硕士毕业于湖南大学',
    hobby: '钢琴、绘画',
  },
  {
    name: '张瑜',
    title: '博士生',
    type: '博士生',
    email: 'zhangyu122@hnu.edu.cn',
    desc: '2023级博士生，2021级硕士生，本科毕业于湖南大学',
    hobby: '拉丁舞',
  },
  {
    name: '匡晨',
    title: '博士生',
    type: '博士生',
    email: 'kuangchen@hnu.edu.cn',
    desc: '2023级博士生，本科毕业于长沙理工大学、硕士毕业于湖南大学',
    hobby: '看书、旅游',
  },

  // 硕士生
  {
    name: '罗一鸣',
    title: '硕士生',
    type: '硕士生',
    email: 'ludovicluo@hnu.edu.cn',
    desc: '2026级硕士生，本科毕业于武汉理工大学',
    hobby: '骑行、电影',
  },
  {
    name: '谭雅文',
    title: '硕士生',
    type: '硕士生',
    email: '3076875228@qq.com',
    desc: '2026级硕士生，本科毕业于华中师范大学',
    hobby: '运动、听音乐',
  },
  {
    name: '唐婧蔚',
    title: '硕士生',
    type: '硕士生',
    email: '1303762228@qq.com',
    desc: '2026级硕士生，本科毕业于衡阳师范学院',
    hobby: '音乐、旅游',
  },
  {
    name: '曾豪',
    title: '硕士生',
    type: '硕士生',
    email: '3069471293@qq.com',
    desc: '2026级硕士生，本科毕业于肇庆学院',
    hobby: '阅读',
  },
  {
    name: '张子怡',
    title: '硕士生',
    type: '硕士生',
    email: '3574371751@qq.com',
    desc: '2026级硕士生，本科毕业于湖南财政经济学院',
    hobby: '听音乐、电影',
  },
  {
    name: '可容希',
    title: '硕士生',
    type: '硕士生',
    email: 'kkcamellia202505@126.com',
    desc: '2025级硕士生，本科毕业于中央民族大学',
    hobby: '小动物、羽毛球',
  },
  {
    name: '宋羊',
    title: '硕士生',
    type: '硕士生',
    email: 'yangsijy7@hnu.edu.cn',
    desc: '2025 级硕士生，本科毕业于西南大学',
    hobby: '健身、旅游',
  },
  {
    name: '谭锋怡',
    title: '硕士生',
    type: '硕士生',
    email: '2427186969@qq.com',
    desc: '2025级硕士生，本科毕业于湖南大学',
    hobby: '游泳、美食、摄影',
  },
  {
    name: '陈静雯',
    title: '硕士生',
    type: '硕士生',
    email: 'chenjw12@hnu.edu.cn',
    desc: '2024级硕士生，本科毕业于湖南大学',
    hobby: '美食、旅游',
  },
  {
    name: '董龙杰',
    title: '硕士生',
    type: '硕士生',
    email: 'alfred_dong@hnu.edu.cn',
    desc: '2024级硕士生，本科毕业于湖南大学',
    hobby: '旅游、美食',
  },

  // 本科生
  {
    name: '刘润芝',
    title: '本科生',
    type: '本科生',
    email: '1006801397@qq.com',
    desc: '2022级英语（语言智能实验班）',
    hobby: '唱歌、音乐、运动、写作',
  },
  {
    name: '闵滢伊',
    title: '本科生',
    type: '本科生',
    email: 'minyingyi68@163.com',
    desc: '2022级英语（语言智能实验班）',
    hobby: '唱歌、文学、写作、朗诵',
  },
  {
    name: '孙彤',
    title: '本科生',
    type: '本科生',
    email: '2956309031@qq.com',
    desc: '2022级英语（语言智能实验班）',
    hobby: '音乐、舞蹈、球类运动',
  },
  {
    name: '陈建宇',
    title: '本科生',
    type: '本科生',
    email: '2512943510@qq.com',
    desc: '2021级本科生',
    hobby: '旅游、美食',
  },
  {
    name: '刘琛琛',
    title: '本科生',
    type: '本科生',
    email: '1779388498@qq.com',
    desc: '2021级本科生',
    hobby: '文学、旅游',
  },
  {
    name: '李柯萱',
    title: '本科生',
    type: '本科生',
    email: '1215932753@qq.com',
    desc: '2020级本科生',
    hobby: '舞蹈、美食',
  },
  {
    name: '李泽娆',
    title: '本科生',
    type: '本科生',
    email: 'li7854@foxmail.com',
    desc: '2020级本科生',
    hobby: '游戏、动漫、旅行',
  },
  {
    name: '曾天虹',
    title: '本科生',
    type: '本科生',
    email: '2176301247@qq.com',
    desc: '2020级本科生',
    hobby: '羽毛球、第五人格',
  },
  {
    name: '张依宁',
    title: '本科生',
    type: '本科生',
    email: '1394952130@qq.com',
    desc: '2020级本科生',
    hobby: '游戏、探店',
  },
  {
    name: '陈淑瑞',
    title: '本科生',
    type: '本科生',
    email: '924224458@qq.com',
    desc: '2019级本科生',
    hobby: '长笛、声乐、文学',
  },

  {
    name: '聂煜妍',
    title: '本科生',
    type: '本科生',
    email: 'nieyuyan1204@163.com',
    desc: '2019级湖南师范大学本科生，2023级硕士生',
    hobby: '手账、电影、美剧',
  },
  {
    name: '王国宇',
    title: '本科生',
    type: '本科生',
    email: 'lilwillwgy@163.com',
    desc: '2019级本科生',
    hobby: '音乐创作、篮球',
  },
  {
    name: '张中正',
    title: '本科生',
    type: '本科生',
    email: 'zzzhang@hnu.edu.cn',
    desc: '2019级本科生',
    hobby: '美剧、电影、游戏',
  },
];

const alumniGroups = [
  {
    label: '曾在Chen Lab工作的博士后研究员',
    members: ['郭承禹', '阎锦婷'],
  },
  {
    label: '博士毕业生',
    members: ['陈禹风（2022级）', '邓凯方（2022级）'],
  },
  {
    label: '硕士毕业生',
    members: [
      '艾雁（2022级）',
      '陈子龙（2022级）',
      '王瑾（2022级）',
      '杨晶晶（2022级）',
      '杨宇（2022级）',
      '吴诗韵（2021级）',
      '张高德（2021级）',
      '邓凤妮（2020级）',
      '郭青青（2019级）',
      '连婧（2019级）',
    ],
  },
  {
    label: '本科毕业生',
    members: [
      '季玮程（2018级）',
      '李珂（2018级）',
      '徐鹏（2018级）',
      '赵睿（2018级）',
      '吕佳（2017级）',
      '张雪颖（2017级）',
    ],
  },
];

const options = [
  {
    label: '导师',
    value: '导师',
  },
  {
    label: '博士后',
    value: '博士后',
  },
  {
    label: '博士生',
    value: '博士生',
  },
  {
    label: '硕士生',
    value: '硕士生',
  },
  {
    label: '本科生',
    value: '本科生',
  },
  {
    label: '毕业生',
    value: '毕业生',
  },
];

function LabMember() {
  const [list, setList] = useState<IList[]>([]);
  const [curOpt, setCurOpt] = useState<string>('导师');

  useEffect(() => {
    setList(
      total.filter((item: IList) => {
        return curOpt === item.type;
      })
    );
  }, [curOpt]);

  return (
    <div className={styles.labMemberWrap}>
      <div className={styles.options}>
        {options.map((option: IOption, index) => {
          const getOptionClass = () => {
            return `${styles.option} ${curOpt === option.value ? styles.selected : null}`;
          };
          return (
            <span key={option.value} className={getOptionClass()}>
              {!!index ? <span className={styles.split}></span> : null}
              <Button
                type="link"
                onClick={() => {
                  setCurOpt(option.value);
                }}
              >
                {option.label}
              </Button>
            </span>
          );
        })}
      </div>
      {curOpt === '毕业生' ? (
        <div className={styles.alumni}>
          {alumniGroups.map(({ label, members }) => (
            <p key={label}>
              <strong>{label}：</strong>
              {members.join('、')}
            </p>
          ))}
        </div>
      ) : (
        <div className={styles.list}>
          {list.length === 0 ? <Empty description="暂无数据" /> : null}
          {list.map((item: IList) => {
            return (
              <div className={styles.item} key={item.name}>
                <div className={styles.pic}>
                  <PreviewImage
                    src={require(`@/asset/labMember/${item.name}.jpg`)}
                    alt={item.name}
                  />
                </div>
                <div className={styles.info}>
                  <div className={styles.name}>{item.name}</div>
                  <div className={styles.title}>{item.title}</div>
                  <div className={styles.desc}>{item.desc}</div>
                  <div className={styles.tel}>E-mail：{item.email}</div>
                  {item.hobby ? <div className={styles.hobby}>爱好：{item.hobby}</div> : null}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

const mapStateToProps = ({ common }: any) => ({ common });
export default connect(mapStateToProps)(LabMember);
