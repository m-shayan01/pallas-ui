'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { css } from '@styled-system/css'
import { allComponents, allGuides } from 'content-collections'
import { CircleIcon, FileIcon, Search as SearchIcon, X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import * as React from 'react'
import { Button } from '../ui/button'

export function SearchDialog() {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)
  const [query, setQuery] = React.useState('')
  const [activeIndex, setActiveIndex] = React.useState(0)
  const inputRef = React.useRef<HTMLInputElement>(null)

  // Get all searchable documents
  const allDocuments = [
    ...allGuides.map((guide) => ({
      type: 'Guide',
      title: guide.title,
      slug: `/docs/${guide.slug}`,
      description: guide.description,
    })),
    ...allComponents.map((component) => ({
      type: 'Component',
      title: component.title,
      slug: `/docs/components/${component.slug}`,
      description: component.description,
    })),
  ]

  // Filter documents based on search query
  const filteredDocuments = React.useMemo(() => {
    if (!query) return allDocuments

    const lowerCaseQuery = query.toLowerCase()
    return allDocuments.filter(
      (doc) =>
        doc.title.toLowerCase().includes(lowerCaseQuery) ||
        doc.description?.toLowerCase().includes(lowerCaseQuery),
    )
    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  }, [query, allDocuments])

  // Handle keyboard navigation
  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setActiveIndex((prevIndex) =>
          prevIndex < filteredDocuments.length - 1 ? prevIndex + 1 : 0,
        )
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setActiveIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : filteredDocuments.length - 1,
        )
      } else if (e.key === 'Enter') {
        e.preventDefault()
        if (filteredDocuments[activeIndex]) {
          router.push(filteredDocuments[activeIndex].slug)
          setOpen(false)
        }
      }
    },
    [activeIndex, filteredDocuments, router],
  )

  // Register keyboard shortcut to open search
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  // Focus input when dialog opens
  React.useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 0)
    }
  }, [open])

  return (
    <>
      <Button
        variant="outlined"
        onClick={() => setOpen(true)}
        className={css({
          position: 'relative',
          display: 'flex',
          minW: '160px',
          w: { base: 'full', md: '100%' }, // Changed from 'auto' to '100%' for md screens
          justifyContent: 'flex-start',
          gap: '4',
          color: 'text.secondary',
          fontWeight: 'normal',
          px: '2',
          py: '1',
        })}
      >
        <SearchIcon className={css({ h: 'icon.sm', w: 'icon.sm' })} />
        <span
          className={css({
            display: 'none',
            md: {
              display: 'inline',
            },
            paddingRight: '4',
            marginRight: '4',
            paddingLeft: '2',
          })}
        >
          Search documentation...
        </span>
        <span
          className={css({
            display: 'inline',
            md: {
              display: 'none',
            },
          })}
        >
          Search...
        </span>
        <kbd
          className={css({
            position: 'absolute',
            right: '2',
            display: 'none',
            alignItems: 'center',
            gap: '1',
            rounded: 'sm',
            border: '1px solid',
            borderColor: 'border',
            bg: 'surface.layout',
            px: '1',
            fontSize: 'xs',
            fontFamily: 'mono',
            fontWeight: 'normal',
            lineHeight: 'normal',
            marginLeft: '4',
            md: {
              display: 'flex',
            },
          })}
        >
          <span>⌘</span>
          <span>K</span>
        </kbd>
      </Button>

      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay
            className={css({
              bg: 'fill.tertiary',
              opacity: 0.5,
              position: 'fixed',
              inset: 0,
              zIndex: 50,
              animation: 'fadeIn 150ms ease',
            })}
          />
          <Dialog.Content
            className={css({
              position: 'fixed',
              top: '20%',
              left: '50%',
              transform: 'translateX(-50%)',
              w: '90vw',
              maxW: '500px',
              maxH: '85vh',
              bg: 'surface.container',
              rounded: 'md',
              border: '1px solid',
              borderColor: 'border',
              shadow: 'lg',
              zIndex: 51,
              animation: 'fadeIn 200ms ease',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
            })}
            onKeyDown={handleKeyDown}
          >
            <Dialog.Title className={css({ srOnly: true })}>Search Documentation</Dialog.Title>
            <div
              className={css({
                display: 'flex',
                alignItems: 'center',
                borderBottom: '1px solid',
                borderColor: 'border',
                p: '2',
              })}
            >
              <SearchIcon
                className={css({
                  h: 'icon.md',
                  w: 'icon.md',
                  mr: '3',
                  color: 'text.secondary',
                })}
              />
              <input
                ref={inputRef}
                className={css({
                  bg: 'transparent',
                  border: 'none',
                  flex: '1',
                  fontSize: 'md',
                  color: 'text',
                  outline: 'none',
                  '&::placeholder': {
                    color: 'text.secondary',
                  },
                })}
                placeholder="Search documentation..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value)
                  setActiveIndex(0)
                }}
              />
              <Dialog.Close asChild>
                <Button
                  variant="outlined"
                  size="icon"
                  className={css({
                    ml: '3',
                    p: '1',
                  })}
                >
                  <X className={css({ h: 'icon.sm', w: 'icon.sm' })} />
                </Button>
              </Dialog.Close>
            </div>

            <div
              className={css({
                overflowY: 'auto',
                p: '2',
                maxH: '60vh',
              })}
            >
              {query && filteredDocuments.length === 0 ? (
                <div
                  className={css({
                    p: '4',
                    textAlign: 'center',
                    color: 'text.secondary',
                  })}
                >
                  No results found for "{query}"
                </div>
              ) : (
                <div
                  className={css({
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4',
                  })}
                >
                  {filteredDocuments.length > 0 && (
                    <>
                      <div
                        className={css({
                          fontSize: 'xs',
                          fontWeight: 'medium',
                          color: 'text.secondary',
                          py: '1',
                          px: '2',
                        })}
                      >
                        {query ? 'Results' : 'Documentation'}
                      </div>

                      {filteredDocuments.map((doc, index) => (
                        <button
                          type="button"
                          key={doc.slug}
                          className={css({
                            display: 'flex',
                            alignItems: 'center',
                            gap: '3',
                            p: '3',
                            rounded: 'md',
                            textAlign: 'left',
                            cursor: 'pointer',
                            outline: 'none',
                            transition: 'colors',
                            bg: activeIndex === index ? 'fill' : 'transparent',
                            color: activeIndex === index ? 'text' : 'text.secondary',
                            _hover: {
                              bg: 'fill',
                              color: 'text',
                            },
                          })}
                          onClick={() => {
                            router.push(doc.slug)
                            setOpen(false)
                          }}
                          onMouseEnter={() => setActiveIndex(index)}
                        >
                          {doc.type === 'Component' ? (
                            <FileIcon className={css({ h: 'icon.sm', w: 'icon.sm' })} />
                          ) : (
                            <CircleIcon className={css({ h: 'icon.sm', w: 'icon.sm' })} />
                          )}
                          <div>
                            <div className={css({ fontWeight: 'medium' })}>{doc.title}</div>
                            {doc.description && (
                              <div
                                className={css({
                                  fontSize: 'xs',
                                  color: 'text.tertiary',
                                  mt: '1',
                                  lineClamp: 1,
                                })}
                              >
                                {doc.description}
                              </div>
                            )}
                          </div>
                        </button>
                      ))}
                    </>
                  )}
                </div>
              )}
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  )
}
