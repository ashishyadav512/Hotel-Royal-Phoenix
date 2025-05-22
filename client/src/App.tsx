import { Route, Switch } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { MotionProvider } from "./providers/motion-provider";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/home";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <MotionProvider>
          <Toaster />
          <Router />
        </MotionProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
