import React from "react";
import { Upload, Modal, Form, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { UploadFile } from "antd/lib/upload/interface";
import axios from "axios";

type Props = {
  imageList: UploadFile<any>[];
  limit: number;
};

const ImageUpload = (props: Props) => {
  const [previewVisible, setPreviewVisible] = React.useState<boolean>(false);
  const [previewImage, setPreviewImage] = React.useState<string>("");
  const [previewTitle, setPreviewTitle] = React.useState<string>("");
  const [fileList, setFileList] = React.useState<Array<UploadFile>>(
    props.imageList
  );

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ margin: 8, width: "200px" }}>
        Upload <br />
      </div>
    </div>
  );
  const dummyrequest = async (options: any) => {
    const { file, onSuccess, onError, onProgress } = options;
    const url = "https://api.cloudinary.com/v1_1/df4kjrav4/image/upload";
    const preset = "ha9jmrbt";
    const formData = new FormData();
    formData.append("upload_preset", preset);
    formData.append("file", file);
    try {
      const { data } = await axios.post(url, formData, {
        headers: {
          "content-type": "application/x-www-formencoded",
          "X-Requested-With": "XMLHttpRequest",
        },
        onUploadProgress: (e) => {
          onProgress({ percent: (e.loaded / e.total) * 100 });
        },
      });
      file.url = data.url;
      file.thumbUrl = null;
      onSuccess("ok");
    } catch (error) {
      onError({ error });
    }
  };
  const accepts = ["image/gif", "image/jpeg", "image/png"];

  const handleChange = ({ fileList, file }: { fileList: any; file: any }) => {
    const extensionFile = accepts.map((item) => item.split("image/")[1]);
    if (file.size / 1024 / 1024 > 2) {
      message.error("Image must be less than 2MB");
      return;
    } else if (!accepts.includes(file.type)) {
      message.error(
        `Image must be in these types of extension: ${extensionFile.join(", ")}`
      );
      return;
    }
    setFileList(fileList);
  };
  const handleCancel = () => {
    setPreviewVisible(false);
  };
  const handlePreview = async (file: any) => {
    setPreviewVisible(true);
    setPreviewImage(file.url);
    setPreviewTitle(file.name);
  };
  React.useEffect(() => {
    setFileList(props.imageList);
  }, [props.imageList]);

  return (
    <>
      <Form.Item
        name="avatarList"
        style={{
          display: "flex",
          alignItems: "start",
          justifyContent: "start",
        }}
      >
        <Upload
          listType="picture-card"
          fileList={fileList}
          customRequest={dummyrequest}
          maxCount={props.limit}
          onChange={handleChange}
          onPreview={handlePreview}
        >
          {fileList?.length >= props?.limit ? null : uploadButton}
        </Upload>
      </Form.Item>
      <Modal
        open={previewVisible}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img src={previewImage} style={{ width: "100%" }} alt={previewTitle} />
      </Modal>
    </>
  );
};
export default ImageUpload;
