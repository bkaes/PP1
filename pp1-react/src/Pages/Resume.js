import React from "react";
import ResumePDFViewer from "../Components/PDFViewer/PDFViewer";
import './Resume.css'

export default function Resume() {
    return (
        <div className="Resume">
            <div id="space"></div>
            <div className="lander">
                <ResumePDFViewer />
            </div>
        </div>
    );
}