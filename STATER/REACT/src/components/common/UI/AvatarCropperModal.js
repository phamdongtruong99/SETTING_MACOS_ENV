import React, { Component } from 'react';
import PropTypes from 'prop-types';
import I18n from 'i18next';
import AvatarEditor from 'react-avatar-editor';
import { Modal, Button } from 'antd';

const  AvatarCropper = ({ onChangePreview, image, cropDimension, isShowModal, onHideModal } ) => {
  const [state, setstate] = useState({
    position: { x: 0.5, y: 0.5 },
    scale: 1,
    preview: null,
  });

  const setEditorRef(editor) {
    if (editor) editor = editor;
  }

  const handleSave() {
    editor.getImageScaledToCanvas().toBlob(croppedFile => {
      croppedFile.name = image.name;
      onChangePreview({
        croppedFile,
      });
    }, image.type);
  }

  const handleScale(e) {
    const scale = parseFloat(e.target.value);
    setState({ scale });
  }

  const handleXPosition(e) {
    const { position } = state;
    const x = parseFloat(e.target.value);
    setState({ position: { ...position, x } });
  }

  const handleYPosition(e) {
    const { position } = state;
    const y = parseFloat(e.target.value);
    setState({ position: { ...position, y } });
  }

  const handlePositionChange(position) {
    setState({ position });
  }

  render() {
    return (
      <Modal
        width={cropDimension.width + 100}
        visible={isShowModal}
        onCancel={onHideModal}
        className="avatar-editor-modal"
        header="Edit Avatar"
        bodyStyle={{ textAlign: 'center' }}
        footer={[
          <Button
            className="btn-fill btn-wd"
            type="primary"
            onClick={() => handleSave()}
            key="saveBtn"
          >
            {I18n.t('button.save')}
          </Button>,
        ]}
      >
        <AvatarEditor
          ref={editor => setEditorRef(editor)}
          width={cropDimension.width}
          height={cropDimension.height}
          border={cropDimension.border}
          color={[0, 0, 0, 0.6]} // RGBA
          scale={parseFloat(state.scale)}
          rotate={0}
          borderRadius={cropDimension.borderRadius}
          onPositionChange={p => handlePositionChange(p)}
          // onImageChange={() => handleSave()}
          image={image}
          accept="image/*"
        />
        <br />
        Zoom:
        <div className="zoom-div">
          <input
            name="scale"
            type="range"
            onChange={e => handleScale(e)}
            min="0.5"
            max="2"
            step="0.01"
            defaultValue="1"
          />
        </div>
        {!!state.preview && (
          <img
            src={state.preview.img}
            style={{
              borderRadius: `${(Math.min(
                state.preview.height,
                state.preview.width,
              ) +
                10) *
                (state.preview.borderRadius / 2 / 100)}px`,
            }}
            alt=""
          />
        )}
      </Modal>
    );
  }
}

AvatarCropper.propTypes = {
  onChangePreview: PropTypes.func,
  image: PropTypes.object,
  isShowModal: PropTypes.bool,
  onHideModal: PropTypes.func,
  cropDimension: PropTypes.object,
};

AvatarCropper.default = {
  cropDimension: {
    width: 250,
    height: 250,
    border: 50,
    borderRadius: 125,
  },
};

export default AvatarCropper;
