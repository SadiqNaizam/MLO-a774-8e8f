import React from 'react';
import HeaderBar from '../components/layout/HeaderBar';

const HeaderExamplePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <HeaderBar />
      <main className="flex-1 pt-16 bg-background">
        <div className="container py-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Webpage Header Example
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            This page demonstrates a basic layout with a fixed header. The content below
            is scrollable, while the header remains at the top of the viewport.
          </p>

          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-primary mb-6">Scrollable Card Content</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 9 }).map((_, index) => (
                <div 
                  key={`card-${index}`} 
                  className="p-6 border rounded-lg bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow duration-150 ease-in-out"
                >
                  <h3 className="text-xl font-semibold text-card-foreground">Content Card {index + 1}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    This is a sample card to populate the main content area and demonstrate
                    scrolling behavior with the fixed header.
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12 pt-8 border-t border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Additional Scrollable Text</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-base">
                This section contains more text to ensure the page is long enough to scroll significantly. 
                The purpose is to verify that the fixed header remains correctly positioned at the top 
                of the viewport during scrolling. It's important to test with enough content to trigger the browser's scrollbar.
              </p>
              {Array.from({ length: 15 }).map((_, index) => (
                <p key={`text-block-${index}" className="text-sm pb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. (Paragraph {index + 1})
                </p>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default HeaderExamplePage;
