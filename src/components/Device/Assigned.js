import constants, { BUTTON } from '../../constants/htmlConstants';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button, Select, Row, Col } from 'antd';
export default function Addigned({ title, content, onOk }) {
  const [visible, setVisible] = useState(false);
  const { Option, OptGroup } = Select;
  const [users, setUsers] = useState([]);
  const [data, setData] = useState(null);
  const token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjY2YjBjOTQ5MGViYTMyM2FiNTFkMTZkY2NjMDY2NjRlMDNhNjAxYmFlMTAzNGEzZjFhNWRjMTYxOTJmNjNlOTMyMzIzMmQ1Nzc0MDhlOWI4In0.eyJhdWQiOiIxIiwianRpIjoiNjZiMGM5NDkwZWJhMzIzYWI1MWQxNmRjY2MwNjY2NGUwM2E2MDFiYWUxMDM0YTNmMWE1ZGMxNjE5MmY2M2U5MzIzMjMyZDU3NzQwOGU5YjgiLCJpYXQiOjE2MDUxOTkyNTQsIm5iZiI6MTYwNTE5OTI1NCwiZXhwIjoxNjM2NzM1MjU0LCJzdWIiOiI1Iiwic2NvcGVzIjpbXX0.MVZY-Y4SFV6Ysx5mGz9Zr38r95QZCavrb1kdQDXzT7qHGCDRNjDC9Av7rWd-Q4WRBWmz2jwTl8nNaIgcNX2sVIA0_TEF5ZGE4T4G6hVHhkK3_aRFtaMkkz4AbM1UyemE374JdO1KR71jO-3Rf-_-4klb0_OvVkFA5vaQGTe9KwIZW5NWpPF2U3d6M1Y9h7lzaSTGEF-YpeTWUAho6kNB_MUJGSbfJ0ZmqkgaLBWFgevmJlp8hMsgCbx42Bc9gW3dxBCfI_2UAe0iXpIN9lxl1-qi1Ofrh27NeETiKjxfdH3q-z6uoYm4fYx7gyFmeY6kDADkMY6HBYMoClsHTjAmAfOtDlALfJGhr8MYktSBVRzls4bvEgODk3qylOVBVdJFfQkpiE_BgEkUS0TBu0uXTwKGta5tX3mMf62NkmW4k3NSeW7R8c9bGtqRKZpLy8GlOyoBi_MAU1RYemiojyreSh3mt3hjJnQQFL21AlOWjrD71I8QADQTV6kwNw90aQF2OpyM-hrBAgmjkKUIgkfoQuz2clUKNdWikXAxsLwWOM_tf-heUtH1iEQmNQD32dSTgji09xKd33UVDP_iWEm-_dz7SaxBOSrtnpQA5gZbt6PkJD0aMHLabkFb0O7scHWlRoJKR6Hn8SNTS5tQYHz5ofnuQX7XYQHQIT8Bt5KRL6k';
  useEffect(() => {
    axios({
      method: 'GET',
      url: 'http://api-php.dev-hrm.nals.vn/api/users',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        const userArr = res.data.data.map((elm, key) => {
          return {
            key: elm.id,
            name: elm.full_name,
          };
        });
        setUsers(userArr);
      })
      .catch((err) => {
        setUsers(null);
      });
  }, []);

  function handleCancel() {
    setVisible(false);
  }
  function showModal() {
    setVisible(true);
  }
  function handleChange(value) {
    const newObj = {
      status: true,
      userId: value,
    };
    console.log(value);
    console.log(newObj);
  }
  return (
    <>
      <Row style={{ textAlign: 'center' }}>
        <Col span={8}></Col>
        <Col span={4}>
          <Button type="primary" onClick={showModal}>
            {constants.BUTTON.ASSIGNED}
          </Button>
        </Col>
      </Row>
      <Modal
        title={title}
        visible={visible}
        onOk={handleCancel}
        onCancel={handleCancel}
        width="400px"
      >
        <Row>
          <Col span={6}>
            <label>{content}</label>
          </Col>
          <Col span={10}>
            <Select
              defaultValue="Choose name "
              style={{ width: 200 }}
              onChange={handleChange}
            >
              {users.map(function (element) {
                return <Option value={element.key}>{element.name}</Option>;
              })}
            </Select>
          </Col>
        </Row>
      </Modal>
    </>
  );
}
