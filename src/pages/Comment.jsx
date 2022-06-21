import {Button, Card, Tabs} from "antd";
import React from "react";

export default function Comment() {
    const { TabPane } = Tabs;

    const onChange = (key) => {
        console.log(key);
    };
    const { Meta } = Card;

    return(
        <div className='list_table' style={{width:'1100px',height:'600px',marginLeft:'10px',paddingLeft:'10px'}}>
            <Tabs defaultActiveKey="1" onChange={onChange}>
                <TabPane tab="欧美专区" key="1">
                    <div style={{marginLeft:'0px'}}><Button href='/Boardnew'>最新</Button><Button href='/Demo'>最热</Button><Button href='/Comment'>好评</Button></div>
                    <div className='camera' style={{height:'400px',width:'200px',float: 'left',paddingRight:'20px',paddingTop:'10px'}}>
                        <Card
                            hoverable
                            style={{
                                width: 150,
                                height:300
                            }}
                            cover={<img style={{width:'150px',height:'200px'}} alt="example" src="https://image11.m1905.cn/uploadfile/2016/0519/thumb_1_150_203_20160519100712646942.jpg" />}
                        >
                            <Meta title="《愤怒的小鸟》" description="愤怒的小鸟首映礼" />
                        </Card>
                    </div>
                    <div className='camera' style={{height:'400px',width:'200px',float: 'left',paddingRight:'20px',paddingTop:'10px',paddingLeft:'10px'}}>
                        <Card
                            hoverable
                            style={{
                                float:'left',
                                width: 150,
                                height:300
                            }}
                            cover={<img style={{width:'150px',height:'200px'}} alt="《刺客信条》" src="https://image11.m1905.cn/uploadfile/2020/0401/thumb_1_150_203_20200401115532263759.jpg" />}
                        >
                            <Meta title="《非法边境线》" description="通缉强盗收获真爱" />
                        </Card>
                    </div>
                    <div className='camera' style={{height:'400px',width:'200px',float: 'left',paddingRight:'10px',paddingTop:'10px',paddingLeft:'20px'}}>
                        <Card
                            hoverable
                            style={{
                                float:'left',
                                width: 150,
                                height:300
                            }}
                            cover={<img style={{width:'150px',height:'200px'}} alt="《摩登时代》" src="https://image11.m1905.cn/uploadfile/2019/0708/thumb_1_150_203_20190708032316555834.jpg" />}
                        >
                            <Meta title="《将军号》" description="巴斯特基顿代表作" />
                        </Card>
                    </div>
                    <div className='camera' style={{height:'400px',width:'200px',float: 'left',paddingRight:'20px',paddingTop:'10px',paddingLeft:'30px'}}>
                        <Card
                            hoverable
                            style={{
                                float:'left',
                                width: 150,
                                height:300
                            }}
                            cover={<img style={{width:'150px',height:'200px'}} alt="example" src="https://image11.m1905.cn/uploadfile/2012/0829/thumb_1_150_203_20120829102049369.jpg" />}
                        >
                            <Meta title="《秘密使节》" description="秘密使节" />
                        </Card>
                    </div>
                    <div className='camera' style={{height:'400px',width:'200px',float: 'left',paddingRight:'20px',paddingTop:'10px',paddingLeft:'40px'}}>
                        <Card
                            hoverable
                            style={{
                                float:'left',
                                width: 150,
                                height:300
                            }}
                            cover={<img style={{width:'150px',height:'200px'}} alt="example" src="https://image11.m1905.cn/uploadfile/2019/0111/thumb_1_150_203_20190111085951334723.jpg" />}
                        >
                            <Meta title="《青年马克思》" description="终结者创世纪" />
                        </Card>
                    </div>
                </TabPane>
                <TabPane tab="港台专区" key="2">
                    <div style={{marginLeft:'0px'}}><Button>最新</Button><Button>最热</Button><Button>好评</Button></div>
                    <div className='camera' style={{height:'400px',width:'200px',float: 'left',paddingRight:'20px',paddingTop:'10px'}}>
                        <Card
                            hoverable
                            style={{
                                width: 200,
                                height:200
                            }}
                            cover={<img alt="example" src="https://image11.m1905.cn/uploadfile/2014/0102/thumb_1_710_359_20140102100434994350.jpg" />}
                        >
                            <Meta title="《激战》" description="张家辉主演" />
                        </Card>
                    </div>
                    <div className='camera' style={{height:'400px',width:'200px',float: 'left',paddingRight:'20px',paddingTop:'10px',paddingLeft:'10px'}}>
                        <Card
                            hoverable
                            style={{
                                float:'left',
                                width: 200,
                                height:200
                            }}
                            cover={<img alt="《叶问2》" src="https://image11.m1905.cn/uploadfile/2013/1126/thumb_1_710_359_20131126013505992309.jpg" />}
                        >
                            <Meta title="《叶问2：宗师传奇》" description="武耀天下魂动中华 黄晓明苦学甄功夫" />
                        </Card>
                    </div>
                    <div className='camera' style={{height:'400px',width:'200px',float: 'left',paddingRight:'10px',paddingTop:'10px',paddingLeft:'20px'}}>
                        <Card
                            hoverable
                            style={{
                                float:'left',
                                width: 200,
                                height:200
                            }}
                            cover={<img alt="《西游记之大闹天宫》" src="https://image11.m1905.cn/uploadfile/2014/0522/thumb_1_710_359_20140522092235739808.jpg" />}
                        >
                            <Meta title="《西游记之大闹天宫》" description="甄子丹变身孙悟空 郭富城最帅牛魔王" />
                        </Card>
                    </div>
                    <div className='camera' style={{height:'400px',width:'200px',float: 'left',paddingRight:'20px',paddingTop:'10px',paddingLeft:'30px'}}>
                        <Card
                            hoverable
                            style={{
                                float:'left',
                                width: 200,
                                height:200
                            }}
                            cover={<img alt="example" src="https://image11.m1905.cn/uploadfile/2014/0225/thumb_1_710_359_20140225091918798280.jpg" />}
                        >
                            <Meta title="《光辉岁月》" description="香港热血动作巨制 众星云集快意恩仇" />
                        </Card>
                    </div>
                    <div className='camera' style={{height:'400px',width:'200px',float: 'left',paddingRight:'20px',paddingTop:'10px',paddingLeft:'40px'}}>
                        <Card
                            hoverable
                            style={{
                                float:'left',
                                width: 200,
                                height:200,
                            }}
                            cover={<img alt="example" src="https://image11.m1905.cn/uploadfile/2014/0126/thumb_1_157_85_20140126055542112685.jpg" />}
                        >
                            <Meta title="《警察故事2013》" description="成龙大哥延续经典" />
                        </Card>
                    </div>
                </TabPane>
                <TabPane tab="大陆专区" key="3">
                    <div style={{marginLeft:'0px'}}><Button>最新</Button><Button>最热</Button><Button>好评</Button></div>
                    <div className='camera' style={{height:'400px',width:'200px',float: 'left',paddingRight:'20px',paddingTop:'10px'}}>
                        <Card
                            hoverable
                            style={{
                                width: 200,
                                height:200
                            }}
                            cover={<img alt="example" src="https://image11.m1905.cn/uploadfile/2018/0403/thumb_1_157_85_20180403043453481319.jpg" />}
                        >
                            <Meta title="《白鹿原》" description="张雨绮陷情感挣扎" />
                        </Card>
                    </div>
                    <div className='camera' style={{height:'400px',width:'200px',float: 'left',paddingRight:'20px',paddingTop:'10px',paddingLeft:'10px'}}>
                        <Card
                            hoverable
                            style={{
                                float:'left',
                                width: 200,
                                height:200
                            }}
                            cover={<img alt="《秋喜》" src="https://image11.m1905.cn/uploadfile/2018/0723/thumb_1_157_85_20180723034923889453.jpg" />}
                        >
                            <Meta title="《秋喜》" description="江一燕爱上郭晓冬" />
                        </Card>
                    </div>
                    <div className='camera' style={{height:'400px',width:'200px',float: 'left',paddingRight:'10px',paddingTop:'10px',paddingLeft:'20px'}}>
                        <Card
                            hoverable
                            style={{
                                float:'left',
                                width: 200,
                                height:200
                            }}
                            cover={<img alt="《摩登时代》" src="https://image11.m1905.cn/uploadfile/2014/1113/thumb_1_157_85_20141113103959630233.jpg" />}
                        >
                            <Meta title="《江湖论剑实录》" description="郑恺爆笑节操喜剧" />
                        </Card>
                    </div>
                    <div className='camera' style={{height:'400px',width:'200px',float: 'left',paddingRight:'20px',paddingTop:'10px',paddingLeft:'30px'}}>
                        <Card
                            hoverable
                            style={{
                                float:'left',
                                width: 200,
                                height:200
                            }}
                            cover={<img alt="example" src="https://image11.m1905.cn/uploadfile/2014/0707/thumb_1_157_85_20140707052557211306.jpg" />}
                        >
                            <Meta title="《武僧传奇之决战程子沟》" description="武僧山贼秋收激战" />
                        </Card>
                    </div>
                    <div className='camera' style={{height:'400px',width:'200px',float: 'left',paddingRight:'20px',paddingTop:'10px',paddingLeft:'40px'}}>
                        <Card
                            hoverable
                            style={{
                                float:'left',
                                width: 200,
                                height:200
                            }}
                            cover={<img alt="example" src="https://image11.m1905.cn/uploadfile/2020/1224/thumb_1_157_85_20201224094603145766.jpg" />}
                        >
                            <Meta title="《穆桂英挂帅》" description="豫剧经典巾帼女将" />
                        </Card>
                    </div>
                </TabPane>
            </Tabs>
        </div>
    )

}
