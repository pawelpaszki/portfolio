import React, { useContext } from 'react';

import './Certificates.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { certificatesData } from '../../data/certificatesData'
import CertificateCard from './CertificatesCard';

function Certificate() {

    const { theme } = useContext(ThemeContext);
    return (
        <>
            {certificatesData.certificates.length > 0 && (
                <div className="certificate" id="certificate" style={{ backgroundColor: theme.secondary }}>
                    <div className="certificate-body">
                        <h1 style={{ color: theme.primary }}>Certificates</h1>
                        <h4 style={{ color: theme.tertiary }}>{certificatesData.bio}</h4>
                    </div>
                    <div className="certificate-cards">
                        {certificatesData.certificates.map(achieve => (
                            <CertificateCard
                                key={achieve.id}
                                id={achieve.id}
                                title={achieve.title}
                                details={achieve.details}
                                date={achieve.date}
                                field={achieve.field}
                                image={achieve.image} />
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}

export default Certificate
