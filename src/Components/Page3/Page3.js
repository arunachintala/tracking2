import React from 'react';
import Page1 from '../pages/page1';
import Page2 from '../pages/Page2';
function Page3() {
    return (

        <div style={{ width: '100%', backgroundColor: '#F5F8F8', border: '1px solid white' }}>

            <div>
                <p style={{ marginTop: '2%', marginLeft: '30px', fontFamily: 'Poppins', fontWeight: 600, fontSize: '32px', lineHeight: '48px' }}>Zippyy Tracking</p>
            </div>

            <div style={{ margin: '1%', borderRadius: '16px', backgroundColor: '#FFFFFF', padding: '2%' }}>
                <div>
                    <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                        <div style={{ width: '50%' }}>
                            <div style={{ marginBottom: '10%', height: 'auto', }}>
                                <p style={{ fontFamily: 'Poppins', fontWeight: '600', fontSize: '16px', lineHeight: '24px', color: '#121114', marginBottom: '1%' }}>Tracking Status</p>
                                <p style={{ fontFamily: 'Poppins', color: '#5F5A6B', fontWeight: '400', fontSize: '12px', lineHeight: '18px' }}>Quickly check your tracking status below or click on details see more info.</p></div>
                            <Page1 />
                        </div>
                        <div style={{ width: '60%' }}>
                            <Page2 />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page3;

