import React from 'react'
import DOMPurify from 'dompurify'

const HTMLRenderer = ({ htmlContent }) => {
    const sanitizedContent = DOMPurify.sanitize(htmlContent)

    return <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
}

export default HTMLRenderer
