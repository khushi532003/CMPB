import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextPRovider, BlogUserContextProvider, ChurayePalContextProvider, ContactContextProvider, HappyStoriesContextProvider, PackageContextProvider, ProfileContextProvider } from '@/context'
import MemberContextProvider from './context/MembersContext/MembersContext.jsx'
import AdminMembersContextProvider from './AdminContext/MembersContext/AdminMembersContext.jsx'
import { AdminContactContextProvider, BlogContextProvider, ChurayeHuePalContextProvider, HappyStoryContextProvider, ProgrammeContextProvider } from './AdminContext/index.jsx'

createRoot(document.getElementById('root')).render(
  <AuthContextPRovider>
    <ContactContextProvider>
      <PackageContextProvider>
        <ProfileContextProvider>
          <HappyStoriesContextProvider>
            <MemberContextProvider>
              <AdminMembersContextProvider>
                <ProgrammeContextProvider>
                  <ChurayeHuePalContextProvider>
                    <ChurayePalContextProvider>
                      <HappyStoryContextProvider>
                        <BlogUserContextProvider>
                          <BlogContextProvider>
                            <AdminContactContextProvider>
                              <BrowserRouter>
                                <App />
                              </BrowserRouter>
                            </AdminContactContextProvider>
                          </BlogContextProvider>
                        </BlogUserContextProvider>
                      </HappyStoryContextProvider>
                    </ChurayePalContextProvider>
                  </ChurayeHuePalContextProvider>
                </ProgrammeContextProvider>
              </AdminMembersContextProvider>
            </MemberContextProvider>
          </HappyStoriesContextProvider>
        </ProfileContextProvider>
      </PackageContextProvider>
    </ContactContextProvider>
  </AuthContextPRovider>
)