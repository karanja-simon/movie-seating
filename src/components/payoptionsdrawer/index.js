import React, { Component } from 'react';
import { Drawer, Card, Form, Input, Button} from 'antd';

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
    }
};

class PayOptionsDrawer extends Component {

    render() {
        const { visible, onClose, totals } = this.props;
        return (
            <div>
                <Drawer
                    title={'Checkout | TOTAL: ' + totals + ' KES'}
                    width={400}
                    onClose={onClose}
                    visible={visible}
                >
                    <Card title="Payment Details" bordered={false} style={{ width: 350 }}>
                        <Form {...formItemLayout}>
                            <Form.Item style={{ marginBottom: 5, textAlign: 'left' }}
                                label="Email"
                            >
                            </Form.Item>
                            <Form.Item style={{ width: 600 }}>
                                <Input placeholder="Email" id="error" />
                            </Form.Item>
                            <Form.Item style={{ width: 600 }}>
                                <Button type="primary">Next</Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Drawer>
            </div>
        )
    }

}

export default PayOptionsDrawer;