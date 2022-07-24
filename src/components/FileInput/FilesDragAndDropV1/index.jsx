import React from 'react';

class DragDropFile extends React.Component {
    constructor(props) {
        super(props);
        this.onDrop = this.onDrop.bind(this);
    }
    suppress(evt) {
        evt.stopPropagation();
        evt.preventDefault();
    }
    onDrop(evt) {
        evt.stopPropagation();
        evt.preventDefault();
        const files = evt.dataTransfer.files;
        if (files && files[0]) this.props.handleFile(files[0]);
    }
    render() {
        return (
            <div
                style={{ display: 'flex', height: '90vh', flexDirection: 'column', alignItems: 'center', backgroundColor: '#999999', borderRadius: 5, margin: 16 }}
                onDrop={this.onDrop}
                onDragEnter={this.suppress}
                onDragOver={this.suppress}
            >
                {this.props.children}
            </div>
        );
    }
}