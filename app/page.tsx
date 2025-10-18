'use client'

import {
  ChevronDown,
  Settings,
  X,
  Gauge,
  BookOpen,
  Network,
  BarChart3,
  GitBranch,
  Copy,
  Diamond,
  Plus
} from 'lucide-react'

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Top Bar */}
      <div style={{
        background: '#4A90E2',
        height: '54px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            color: 'white',
            fontSize: '14px',
            fontWeight: 500
          }}>
            AI Generated Version
            <ChevronDown size={16} />
          </div>
          <div style={{
            color: 'rgba(255, 255, 255, 0.75)',
            fontSize: '12px',
            fontWeight: 400
          }}>
            Changes saved
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Settings size={20} color="white" />
          <button style={{
            background: 'white',
            border: '1px solid #DCDFE4',
            borderRadius: '4px',
            padding: '8px 16px',
            color: 'black',
            fontSize: '14px',
            fontWeight: 500
          }}>
            Preview
          </button>
          <button style={{
            background: '#212529',
            border: 'none',
            borderRadius: '4px',
            padding: '8px 16px',
            color: 'white',
            fontSize: '14px',
            fontWeight: 500
          }}>
            Save
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Left Sidebar */}
        <div style={{
          width: '240px',
          background: '#212529',
          display: 'flex',
          flexDirection: 'column',
          padding: '24px 0'
        }}>
          {/* Logo */}
          <div style={{
            padding: '0 20px',
            marginBottom: '32px'
          }}>
            <div style={{
              color: 'white',
              fontSize: '16px',
              fontWeight: 700,
              letterSpacing: '0.5px'
            }}>
              WORLDQUVN LEARNING
            </div>
          </div>

          {/* Primary Nav */}
          <nav style={{ marginBottom: '32px' }}>
            <NavItem icon={<Gauge size={20} />} label="Overview" />
            <NavItem icon={<BookOpen size={20} />} label="Learning Objectives" />
            <NavItem icon={<Network size={20} />} label="Ontology" />
            <NavItem icon={<BarChart3 size={20} />} label="Source Library" />
          </nav>

          {/* Learning Paths Section */}
          <div style={{ marginBottom: '32px', flex: 1 }}>
            <div style={{
              padding: '0 20px',
              marginBottom: '12px',
              color: '#9CA3AF',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.8px'
            }}>
              LEARNING PATHS
            </div>
            <PathItem icon={<Network size={20} />} label="WQU Administration" active />
            <PathItem icon={<GitBranch size={20} />} label="Intro to Python" />
            <PathItem icon={<GitBranch size={20} />} label="Python foundations" />
            <button style={{
              width: '100%',
              padding: '10px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              color: '#9CA3AF',
              fontSize: '14px',
              marginTop: '8px'
            }}>
              <Plus size={16} />
              New path
            </button>
          </div>

          {/* Settings */}
          <div style={{ marginBottom: '24px' }}>
            <NavItem icon={<Settings size={20} />} label="Settings" />
          </div>

          {/* User Profile */}
          <div style={{
            padding: '0 20px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: '#4B5563',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '14px',
              fontWeight: 500
            }}>
              A
            </div>
            <div style={{
              color: '#9CA3AF',
              fontSize: '13px'
            }}>
              ayhan@tap...
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {/* Content Header */}
          <div style={{
            height: '64px',
            borderBottom: '1px solid #EAECEF',
            display: 'flex',
            alignItems: 'center',
            padding: '0 24px',
            gap: '16px',
            background: 'white'
          }}>
            <X size={20} color="#4B5563" />
            <h1 style={{
              fontSize: '20px',
              fontWeight: 700,
              color: 'black'
            }}>
              Why Do We Code
            </h1>
          </div>

          {/* Two-Pane Body */}
          <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
            {/* Left Inspector Pane */}
            <div style={{
              width: '320px',
              background: '#F8F9FA',
              padding: '24px',
              overflowY: 'auto'
            }}>
              {/* Learning Path Card */}
              <div style={{
                background: 'white',
                borderRadius: '8px',
                padding: '20px',
                marginBottom: '16px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '16px'
                }}>
                  <h3 style={{
                    fontSize: '14px',
                    fontWeight: 700,
                    color: '#374151'
                  }}>
                    Learning Path
                  </h3>
                  <Copy size={16} color="#9CA3AF" />
                </div>
                <div style={{ marginBottom: '12px' }}>
                  <div style={{
                    fontSize: '11px',
                    color: '#6B7280',
                    marginBottom: '4px'
                  }}>
                    Course
                  </div>
                  <div style={{
                    fontSize: '14px',
                    color: 'black',
                    fontWeight: 400
                  }}>
                    Coding Fundamentals
                  </div>
                </div>
                <div>
                  <div style={{
                    fontSize: '11px',
                    color: '#6B7280',
                    marginBottom: '4px'
                  }}>
                    Module
                  </div>
                  <div style={{
                    fontSize: '14px',
                    color: 'black',
                    fontWeight: 400
                  }}>
                    Coding Fundamentals
                  </div>
                </div>
              </div>

              {/* Learning Objectives Card */}
              <div style={{
                background: 'white',
                borderRadius: '8px',
                padding: '20px',
                marginBottom: '16px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '16px'
                }}>
                  <h3 style={{
                    fontSize: '14px',
                    fontWeight: 700,
                    color: '#374151'
                  }}>
                    Learning Objectives
                  </h3>
                  <span style={{
                    background: '#E5E7EB',
                    borderRadius: '12px',
                    padding: '2px 8px',
                    fontSize: '12px',
                    color: '#4B5563',
                    fontWeight: 600
                  }}>
                    1
                  </span>
                </div>
                <div>
                  <div style={{
                    fontSize: '14px',
                    color: 'black',
                    marginBottom: '8px'
                  }}>
                    Understand the motivations for...
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <Diamond size={12} color="#4A90E2" fill="#4A90E2" />
                    <span style={{
                      fontSize: '12px',
                      color: '#6B7280'
                    }}>
                      Bloom 1 (Knowledge)
                    </span>
                  </div>
                </div>
              </div>

              {/* Learning Experiences Card */}
              <div style={{
                background: 'white',
                borderRadius: '8px',
                padding: '20px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '16px'
                }}>
                  <h3 style={{
                    fontSize: '14px',
                    fontWeight: 700,
                    color: '#374151'
                  }}>
                    Learning Experiences
                  </h3>
                  <button style={{
                    background: '#F3F4F6',
                    borderRadius: '4px',
                    padding: '4px 10px',
                    fontSize: '12px',
                    color: '#374151',
                    fontWeight: 500
                  }}>
                    New +
                  </button>
                </div>
              </div>
            </div>

            {/* Right Main Pane */}
            <div style={{
              flex: 1,
              background: 'white',
              padding: '24px',
              overflowY: 'auto'
            }}>
              <div style={{
                maxWidth: '800px',
                margin: '0 auto'
              }}>
                <p style={{
                  fontSize: '15px',
                  lineHeight: '1.6',
                  color: '#374151'
                }}>
                  Content area for learning path details and editing...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function NavItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div style={{
      padding: '10px 20px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      color: '#9CA3AF',
      fontSize: '14px',
      cursor: 'pointer'
    }}>
      {icon}
      {label}
    </div>
  )
}

function PathItem({ icon, label, active }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <div style={{
      padding: '10px 20px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      background: active ? '#343A40' : 'transparent',
      color: active ? 'white' : '#9CA3AF',
      fontSize: '14px',
      cursor: 'pointer'
    }}>
      {icon}
      {label}
    </div>
  )
}
